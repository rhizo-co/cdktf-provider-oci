# `stackMonitoringMonitoredResource` Submodule <a name="`stackMonitoringMonitoredResource` Submodule" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StackMonitoringMonitoredResource <a name="StackMonitoringMonitoredResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource oci_stack_monitoring_monitored_resource}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.Initializer"></a>

```typescript
import { stackMonitoringMonitoredResource } from 'rhizo-co-terraform-provider-oci'

new stackMonitoringMonitoredResource.StackMonitoringMonitoredResource(scope: Construct, id: string, config: StackMonitoringMonitoredResourceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceConfig">StackMonitoringMonitoredResourceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceConfig">StackMonitoringMonitoredResourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.putAdditionalAliases">putAdditionalAliases</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.putAdditionalCredentials">putAdditionalCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.putAliases">putAliases</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.putCredentials">putCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.putDatabaseConnectionDetails">putDatabaseConnectionDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.putProperties">putProperties</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.resetAdditionalAliases">resetAdditionalAliases</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.resetAdditionalCredentials">resetAdditionalCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.resetAliases">resetAliases</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.resetCredentials">resetCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.resetDatabaseConnectionDetails">resetDatabaseConnectionDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.resetExternalId">resetExternalId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.resetExternalResourceId">resetExternalResourceId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.resetHostName">resetHostName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.resetLicense">resetLicense</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.resetManagementAgentId">resetManagementAgentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.resetProperties">resetProperties</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.resetResourceTimeZone">resetResourceTimeZone</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAdditionalAliases` <a name="putAdditionalAliases" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.putAdditionalAliases"></a>

```typescript
public putAdditionalAliases(value: IResolvable | StackMonitoringMonitoredResourceAdditionalAliases[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.putAdditionalAliases.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliases">StackMonitoringMonitoredResourceAdditionalAliases</a>[]

---

##### `putAdditionalCredentials` <a name="putAdditionalCredentials" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.putAdditionalCredentials"></a>

```typescript
public putAdditionalCredentials(value: IResolvable | StackMonitoringMonitoredResourceAdditionalCredentials[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.putAdditionalCredentials.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentials">StackMonitoringMonitoredResourceAdditionalCredentials</a>[]

---

##### `putAliases` <a name="putAliases" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.putAliases"></a>

```typescript
public putAliases(value: StackMonitoringMonitoredResourceAliases): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.putAliases.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliases">StackMonitoringMonitoredResourceAliases</a>

---

##### `putCredentials` <a name="putCredentials" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.putCredentials"></a>

```typescript
public putCredentials(value: StackMonitoringMonitoredResourceCredentials): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.putCredentials.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentials">StackMonitoringMonitoredResourceCredentials</a>

---

##### `putDatabaseConnectionDetails` <a name="putDatabaseConnectionDetails" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.putDatabaseConnectionDetails"></a>

```typescript
public putDatabaseConnectionDetails(value: StackMonitoringMonitoredResourceDatabaseConnectionDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.putDatabaseConnectionDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceDatabaseConnectionDetails">StackMonitoringMonitoredResourceDatabaseConnectionDetails</a>

---

##### `putProperties` <a name="putProperties" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.putProperties"></a>

```typescript
public putProperties(value: IResolvable | StackMonitoringMonitoredResourceProperties[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.putProperties.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceProperties">StackMonitoringMonitoredResourceProperties</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.putTimeouts"></a>

```typescript
public putTimeouts(value: StackMonitoringMonitoredResourceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceTimeouts">StackMonitoringMonitoredResourceTimeouts</a>

---

##### `resetAdditionalAliases` <a name="resetAdditionalAliases" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.resetAdditionalAliases"></a>

```typescript
public resetAdditionalAliases(): void
```

##### `resetAdditionalCredentials` <a name="resetAdditionalCredentials" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.resetAdditionalCredentials"></a>

```typescript
public resetAdditionalCredentials(): void
```

##### `resetAliases` <a name="resetAliases" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.resetAliases"></a>

```typescript
public resetAliases(): void
```

##### `resetCredentials` <a name="resetCredentials" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.resetCredentials"></a>

```typescript
public resetCredentials(): void
```

##### `resetDatabaseConnectionDetails` <a name="resetDatabaseConnectionDetails" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.resetDatabaseConnectionDetails"></a>

```typescript
public resetDatabaseConnectionDetails(): void
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetExternalId` <a name="resetExternalId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.resetExternalId"></a>

```typescript
public resetExternalId(): void
```

##### `resetExternalResourceId` <a name="resetExternalResourceId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.resetExternalResourceId"></a>

```typescript
public resetExternalResourceId(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetHostName` <a name="resetHostName" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.resetHostName"></a>

```typescript
public resetHostName(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLicense` <a name="resetLicense" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.resetLicense"></a>

```typescript
public resetLicense(): void
```

##### `resetManagementAgentId` <a name="resetManagementAgentId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.resetManagementAgentId"></a>

```typescript
public resetManagementAgentId(): void
```

##### `resetProperties` <a name="resetProperties" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.resetProperties"></a>

```typescript
public resetProperties(): void
```

##### `resetResourceTimeZone` <a name="resetResourceTimeZone" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.resetResourceTimeZone"></a>

```typescript
public resetResourceTimeZone(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a StackMonitoringMonitoredResource resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.isConstruct"></a>

```typescript
import { stackMonitoringMonitoredResource } from 'rhizo-co-terraform-provider-oci'

stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.isTerraformElement"></a>

```typescript
import { stackMonitoringMonitoredResource } from 'rhizo-co-terraform-provider-oci'

stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.isTerraformResource"></a>

```typescript
import { stackMonitoringMonitoredResource } from 'rhizo-co-terraform-provider-oci'

stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.generateConfigForImport"></a>

```typescript
import { stackMonitoringMonitoredResource } from 'rhizo-co-terraform-provider-oci'

stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a StackMonitoringMonitoredResource resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the StackMonitoringMonitoredResource to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing StackMonitoringMonitoredResource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the StackMonitoringMonitoredResource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.additionalAliases">additionalAliases</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesList">StackMonitoringMonitoredResourceAdditionalAliasesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.additionalCredentials">additionalCredentials</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsList">StackMonitoringMonitoredResourceAdditionalCredentialsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.aliases">aliases</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesOutputReference">StackMonitoringMonitoredResourceAliasesOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.credentials">credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsOutputReference">StackMonitoringMonitoredResourceCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.databaseConnectionDetails">databaseConnectionDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceDatabaseConnectionDetailsOutputReference">StackMonitoringMonitoredResourceDatabaseConnectionDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.properties">properties</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourcePropertiesList">StackMonitoringMonitoredResourcePropertiesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.resourceCategory">resourceCategory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.sourceType">sourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceTimeoutsOutputReference">StackMonitoringMonitoredResourceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.additionalAliasesInput">additionalAliasesInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliases">StackMonitoringMonitoredResourceAdditionalAliases</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.additionalCredentialsInput">additionalCredentialsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentials">StackMonitoringMonitoredResourceAdditionalCredentials</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.aliasesInput">aliasesInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliases">StackMonitoringMonitoredResourceAliases</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.credentialsInput">credentialsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentials">StackMonitoringMonitoredResourceCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.databaseConnectionDetailsInput">databaseConnectionDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceDatabaseConnectionDetails">StackMonitoringMonitoredResourceDatabaseConnectionDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.externalIdInput">externalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.externalResourceIdInput">externalResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.hostNameInput">hostNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.licenseInput">licenseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.managementAgentIdInput">managementAgentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.propertiesInput">propertiesInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceProperties">StackMonitoringMonitoredResourceProperties</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.resourceTimeZoneInput">resourceTimeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceTimeouts">StackMonitoringMonitoredResourceTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.externalId">externalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.externalResourceId">externalResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.hostName">hostName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.license">license</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.managementAgentId">managementAgentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.resourceTimeZone">resourceTimeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `additionalAliases`<sup>Required</sup> <a name="additionalAliases" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.additionalAliases"></a>

```typescript
public readonly additionalAliases: StackMonitoringMonitoredResourceAdditionalAliasesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesList">StackMonitoringMonitoredResourceAdditionalAliasesList</a>

---

##### `additionalCredentials`<sup>Required</sup> <a name="additionalCredentials" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.additionalCredentials"></a>

```typescript
public readonly additionalCredentials: StackMonitoringMonitoredResourceAdditionalCredentialsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsList">StackMonitoringMonitoredResourceAdditionalCredentialsList</a>

---

##### `aliases`<sup>Required</sup> <a name="aliases" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.aliases"></a>

```typescript
public readonly aliases: StackMonitoringMonitoredResourceAliasesOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesOutputReference">StackMonitoringMonitoredResourceAliasesOutputReference</a>

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.credentials"></a>

```typescript
public readonly credentials: StackMonitoringMonitoredResourceCredentialsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsOutputReference">StackMonitoringMonitoredResourceCredentialsOutputReference</a>

---

##### `databaseConnectionDetails`<sup>Required</sup> <a name="databaseConnectionDetails" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.databaseConnectionDetails"></a>

```typescript
public readonly databaseConnectionDetails: StackMonitoringMonitoredResourceDatabaseConnectionDetailsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceDatabaseConnectionDetailsOutputReference">StackMonitoringMonitoredResourceDatabaseConnectionDetailsOutputReference</a>

---

##### `properties`<sup>Required</sup> <a name="properties" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.properties"></a>

```typescript
public readonly properties: StackMonitoringMonitoredResourcePropertiesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourcePropertiesList">StackMonitoringMonitoredResourcePropertiesList</a>

---

##### `resourceCategory`<sup>Required</sup> <a name="resourceCategory" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.resourceCategory"></a>

```typescript
public readonly resourceCategory: string;
```

- *Type:* string

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.sourceType"></a>

```typescript
public readonly sourceType: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.timeouts"></a>

```typescript
public readonly timeouts: StackMonitoringMonitoredResourceTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceTimeoutsOutputReference">StackMonitoringMonitoredResourceTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `additionalAliasesInput`<sup>Optional</sup> <a name="additionalAliasesInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.additionalAliasesInput"></a>

```typescript
public readonly additionalAliasesInput: IResolvable | StackMonitoringMonitoredResourceAdditionalAliases[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliases">StackMonitoringMonitoredResourceAdditionalAliases</a>[]

---

##### `additionalCredentialsInput`<sup>Optional</sup> <a name="additionalCredentialsInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.additionalCredentialsInput"></a>

```typescript
public readonly additionalCredentialsInput: IResolvable | StackMonitoringMonitoredResourceAdditionalCredentials[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentials">StackMonitoringMonitoredResourceAdditionalCredentials</a>[]

---

##### `aliasesInput`<sup>Optional</sup> <a name="aliasesInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.aliasesInput"></a>

```typescript
public readonly aliasesInput: StackMonitoringMonitoredResourceAliases;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliases">StackMonitoringMonitoredResourceAliases</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `credentialsInput`<sup>Optional</sup> <a name="credentialsInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.credentialsInput"></a>

```typescript
public readonly credentialsInput: StackMonitoringMonitoredResourceCredentials;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentials">StackMonitoringMonitoredResourceCredentials</a>

---

##### `databaseConnectionDetailsInput`<sup>Optional</sup> <a name="databaseConnectionDetailsInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.databaseConnectionDetailsInput"></a>

```typescript
public readonly databaseConnectionDetailsInput: StackMonitoringMonitoredResourceDatabaseConnectionDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceDatabaseConnectionDetails">StackMonitoringMonitoredResourceDatabaseConnectionDetails</a>

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `externalIdInput`<sup>Optional</sup> <a name="externalIdInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.externalIdInput"></a>

```typescript
public readonly externalIdInput: string;
```

- *Type:* string

---

##### `externalResourceIdInput`<sup>Optional</sup> <a name="externalResourceIdInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.externalResourceIdInput"></a>

```typescript
public readonly externalResourceIdInput: string;
```

- *Type:* string

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `hostNameInput`<sup>Optional</sup> <a name="hostNameInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.hostNameInput"></a>

```typescript
public readonly hostNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `licenseInput`<sup>Optional</sup> <a name="licenseInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.licenseInput"></a>

```typescript
public readonly licenseInput: string;
```

- *Type:* string

---

##### `managementAgentIdInput`<sup>Optional</sup> <a name="managementAgentIdInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.managementAgentIdInput"></a>

```typescript
public readonly managementAgentIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.propertiesInput"></a>

```typescript
public readonly propertiesInput: IResolvable | StackMonitoringMonitoredResourceProperties[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceProperties">StackMonitoringMonitoredResourceProperties</a>[]

---

##### `resourceTimeZoneInput`<sup>Optional</sup> <a name="resourceTimeZoneInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.resourceTimeZoneInput"></a>

```typescript
public readonly resourceTimeZoneInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | StackMonitoringMonitoredResourceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceTimeouts">StackMonitoringMonitoredResourceTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

---

##### `externalResourceId`<sup>Required</sup> <a name="externalResourceId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.externalResourceId"></a>

```typescript
public readonly externalResourceId: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.hostName"></a>

```typescript
public readonly hostName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `license`<sup>Required</sup> <a name="license" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.license"></a>

```typescript
public readonly license: string;
```

- *Type:* string

---

##### `managementAgentId`<sup>Required</sup> <a name="managementAgentId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.managementAgentId"></a>

```typescript
public readonly managementAgentId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceTimeZone`<sup>Required</sup> <a name="resourceTimeZone" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.resourceTimeZone"></a>

```typescript
public readonly resourceTimeZone: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResource.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StackMonitoringMonitoredResourceAdditionalAliases <a name="StackMonitoringMonitoredResourceAdditionalAliases" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliases"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliases.Initializer"></a>

```typescript
import { stackMonitoringMonitoredResource } from 'rhizo-co-terraform-provider-oci'

const stackMonitoringMonitoredResourceAdditionalAliases: stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliases = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliases.property.credential">credential</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesCredential">StackMonitoringMonitoredResourceAdditionalAliasesCredential</a></code> | credential block. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliases.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource#name StackMonitoringMonitoredResource#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliases.property.source">source</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource#source StackMonitoringMonitoredResource#source}. |

---

##### `credential`<sup>Required</sup> <a name="credential" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliases.property.credential"></a>

```typescript
public readonly credential: StackMonitoringMonitoredResourceAdditionalAliasesCredential;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesCredential">StackMonitoringMonitoredResourceAdditionalAliasesCredential</a>

credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource#credential StackMonitoringMonitoredResource#credential}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliases.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource#name StackMonitoringMonitoredResource#name}.

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliases.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource#source StackMonitoringMonitoredResource#source}.

---

### StackMonitoringMonitoredResourceAdditionalAliasesCredential <a name="StackMonitoringMonitoredResourceAdditionalAliasesCredential" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesCredential"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesCredential.Initializer"></a>

```typescript
import { stackMonitoringMonitoredResource } from 'rhizo-co-terraform-provider-oci'

const stackMonitoringMonitoredResourceAdditionalAliasesCredential: stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesCredential = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesCredential.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource#name StackMonitoringMonitoredResource#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesCredential.property.service">service</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource#service StackMonitoringMonitoredResource#service}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesCredential.property.source">source</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource#source StackMonitoringMonitoredResource#source}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesCredential.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource#name StackMonitoringMonitoredResource#name}.

---

##### `service`<sup>Required</sup> <a name="service" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesCredential.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource#service StackMonitoringMonitoredResource#service}.

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesCredential.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource#source StackMonitoringMonitoredResource#source}.

---

### StackMonitoringMonitoredResourceAdditionalCredentials <a name="StackMonitoringMonitoredResourceAdditionalCredentials" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentials"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentials.Initializer"></a>

```typescript
import { stackMonitoringMonitoredResource } from 'rhizo-co-terraform-provider-oci'

const stackMonitoringMonitoredResourceAdditionalCredentials: stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentials = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentials.property.credentialType">credentialType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource#credential_type StackMonitoringMonitoredResource#credential_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentials.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource#description StackMonitoringMonitoredResource#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentials.property.keyId">keyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource#key_id StackMonitoringMonitoredResource#key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentials.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource#name StackMonitoringMonitoredResource#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentials.property.properties">properties</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsProperties">StackMonitoringMonitoredResourceAdditionalCredentialsProperties</a>[]</code> | properties block. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentials.property.source">source</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource#source StackMonitoringMonitoredResource#source}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentials.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource#type StackMonitoringMonitoredResource#type}. |

---

##### `credentialType`<sup>Optional</sup> <a name="credentialType" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentials.property.credentialType"></a>

```typescript
public readonly credentialType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource#credential_type StackMonitoringMonitoredResource#credential_type}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentials.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource#description StackMonitoringMonitoredResource#description}.

---

##### `keyId`<sup>Optional</sup> <a name="keyId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentials.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource#key_id StackMonitoringMonitoredResource#key_id}.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentials.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource#name StackMonitoringMonitoredResource#name}.

---

##### `properties`<sup>Optional</sup> <a name="properties" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentials.property.properties"></a>

```typescript
public readonly properties: IResolvable | StackMonitoringMonitoredResourceAdditionalCredentialsProperties[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsProperties">StackMonitoringMonitoredResourceAdditionalCredentialsProperties</a>[]

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource#properties StackMonitoringMonitoredResource#properties}

---

##### `source`<sup>Optional</sup> <a name="source" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentials.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource#source StackMonitoringMonitoredResource#source}.

---

##### `type`<sup>Optional</sup> <a name="type" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentials.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource#type StackMonitoringMonitoredResource#type}.

---

### StackMonitoringMonitoredResourceAdditionalCredentialsProperties <a name="StackMonitoringMonitoredResourceAdditionalCredentialsProperties" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsProperties"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsProperties.Initializer"></a>

```typescript
import { stackMonitoringMonitoredResource } from 'rhizo-co-terraform-provider-oci'

const stackMonitoringMonitoredResourceAdditionalCredentialsProperties: stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsProperties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsProperties.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource#name StackMonitoringMonitoredResource#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsProperties.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource#value StackMonitoringMonitoredResource#value}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsProperties.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource#name StackMonitoringMonitoredResource#name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsProperties.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource#value StackMonitoringMonitoredResource#value}.

---

### StackMonitoringMonitoredResourceAliases <a name="StackMonitoringMonitoredResourceAliases" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliases"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliases.Initializer"></a>

```typescript
import { stackMonitoringMonitoredResource } from 'rhizo-co-terraform-provider-oci'

const stackMonitoringMonitoredResourceAliases: stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliases = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliases.property.credential">credential</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesCredential">StackMonitoringMonitoredResourceAliasesCredential</a></code> | credential block. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliases.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource#name StackMonitoringMonitoredResource#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliases.property.source">source</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource#source StackMonitoringMonitoredResource#source}. |

---

##### `credential`<sup>Required</sup> <a name="credential" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliases.property.credential"></a>

```typescript
public readonly credential: StackMonitoringMonitoredResourceAliasesCredential;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesCredential">StackMonitoringMonitoredResourceAliasesCredential</a>

credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource#credential StackMonitoringMonitoredResource#credential}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliases.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource#name StackMonitoringMonitoredResource#name}.

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliases.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource#source StackMonitoringMonitoredResource#source}.

---

### StackMonitoringMonitoredResourceAliasesCredential <a name="StackMonitoringMonitoredResourceAliasesCredential" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesCredential"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesCredential.Initializer"></a>

```typescript
import { stackMonitoringMonitoredResource } from 'rhizo-co-terraform-provider-oci'

const stackMonitoringMonitoredResourceAliasesCredential: stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesCredential = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesCredential.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource#name StackMonitoringMonitoredResource#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesCredential.property.service">service</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource#service StackMonitoringMonitoredResource#service}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesCredential.property.source">source</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource#source StackMonitoringMonitoredResource#source}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesCredential.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource#name StackMonitoringMonitoredResource#name}.

---

##### `service`<sup>Required</sup> <a name="service" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesCredential.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource#service StackMonitoringMonitoredResource#service}.

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesCredential.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource#source StackMonitoringMonitoredResource#source}.

---

### StackMonitoringMonitoredResourceConfig <a name="StackMonitoringMonitoredResourceConfig" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceConfig.Initializer"></a>

```typescript
import { stackMonitoringMonitoredResource } from 'rhizo-co-terraform-provider-oci'

const stackMonitoringMonitoredResourceConfig: stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource#compartment_id StackMonitoringMonitoredResource#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource#name StackMonitoringMonitoredResource#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceConfig.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource#type StackMonitoringMonitoredResource#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceConfig.property.additionalAliases">additionalAliases</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliases">StackMonitoringMonitoredResourceAdditionalAliases</a>[]</code> | additional_aliases block. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceConfig.property.additionalCredentials">additionalCredentials</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentials">StackMonitoringMonitoredResourceAdditionalCredentials</a>[]</code> | additional_credentials block. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceConfig.property.aliases">aliases</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliases">StackMonitoringMonitoredResourceAliases</a></code> | aliases block. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceConfig.property.credentials">credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentials">StackMonitoringMonitoredResourceCredentials</a></code> | credentials block. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceConfig.property.databaseConnectionDetails">databaseConnectionDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceDatabaseConnectionDetails">StackMonitoringMonitoredResourceDatabaseConnectionDetails</a></code> | database_connection_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource#defined_tags StackMonitoringMonitoredResource#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource#display_name StackMonitoringMonitoredResource#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceConfig.property.externalId">externalId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource#external_id StackMonitoringMonitoredResource#external_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceConfig.property.externalResourceId">externalResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource#external_resource_id StackMonitoringMonitoredResource#external_resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource#freeform_tags StackMonitoringMonitoredResource#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceConfig.property.hostName">hostName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource#host_name StackMonitoringMonitoredResource#host_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource#id StackMonitoringMonitoredResource#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceConfig.property.license">license</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource#license StackMonitoringMonitoredResource#license}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceConfig.property.managementAgentId">managementAgentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource#management_agent_id StackMonitoringMonitoredResource#management_agent_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceConfig.property.properties">properties</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceProperties">StackMonitoringMonitoredResourceProperties</a>[]</code> | properties block. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceConfig.property.resourceTimeZone">resourceTimeZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource#resource_time_zone StackMonitoringMonitoredResource#resource_time_zone}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceTimeouts">StackMonitoringMonitoredResourceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource#compartment_id StackMonitoringMonitoredResource#compartment_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource#name StackMonitoringMonitoredResource#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource#type StackMonitoringMonitoredResource#type}.

---

##### `additionalAliases`<sup>Optional</sup> <a name="additionalAliases" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceConfig.property.additionalAliases"></a>

```typescript
public readonly additionalAliases: IResolvable | StackMonitoringMonitoredResourceAdditionalAliases[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliases">StackMonitoringMonitoredResourceAdditionalAliases</a>[]

additional_aliases block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource#additional_aliases StackMonitoringMonitoredResource#additional_aliases}

---

##### `additionalCredentials`<sup>Optional</sup> <a name="additionalCredentials" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceConfig.property.additionalCredentials"></a>

```typescript
public readonly additionalCredentials: IResolvable | StackMonitoringMonitoredResourceAdditionalCredentials[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentials">StackMonitoringMonitoredResourceAdditionalCredentials</a>[]

additional_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource#additional_credentials StackMonitoringMonitoredResource#additional_credentials}

---

##### `aliases`<sup>Optional</sup> <a name="aliases" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceConfig.property.aliases"></a>

```typescript
public readonly aliases: StackMonitoringMonitoredResourceAliases;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliases">StackMonitoringMonitoredResourceAliases</a>

aliases block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource#aliases StackMonitoringMonitoredResource#aliases}

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceConfig.property.credentials"></a>

```typescript
public readonly credentials: StackMonitoringMonitoredResourceCredentials;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentials">StackMonitoringMonitoredResourceCredentials</a>

credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource#credentials StackMonitoringMonitoredResource#credentials}

---

##### `databaseConnectionDetails`<sup>Optional</sup> <a name="databaseConnectionDetails" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceConfig.property.databaseConnectionDetails"></a>

```typescript
public readonly databaseConnectionDetails: StackMonitoringMonitoredResourceDatabaseConnectionDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceDatabaseConnectionDetails">StackMonitoringMonitoredResourceDatabaseConnectionDetails</a>

database_connection_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource#database_connection_details StackMonitoringMonitoredResource#database_connection_details}

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource#defined_tags StackMonitoringMonitoredResource#defined_tags}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource#display_name StackMonitoringMonitoredResource#display_name}.

---

##### `externalId`<sup>Optional</sup> <a name="externalId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceConfig.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource#external_id StackMonitoringMonitoredResource#external_id}.

---

##### `externalResourceId`<sup>Optional</sup> <a name="externalResourceId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceConfig.property.externalResourceId"></a>

```typescript
public readonly externalResourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource#external_resource_id StackMonitoringMonitoredResource#external_resource_id}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource#freeform_tags StackMonitoringMonitoredResource#freeform_tags}.

---

##### `hostName`<sup>Optional</sup> <a name="hostName" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceConfig.property.hostName"></a>

```typescript
public readonly hostName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource#host_name StackMonitoringMonitoredResource#host_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource#id StackMonitoringMonitoredResource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `license`<sup>Optional</sup> <a name="license" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceConfig.property.license"></a>

```typescript
public readonly license: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource#license StackMonitoringMonitoredResource#license}.

---

##### `managementAgentId`<sup>Optional</sup> <a name="managementAgentId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceConfig.property.managementAgentId"></a>

```typescript
public readonly managementAgentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource#management_agent_id StackMonitoringMonitoredResource#management_agent_id}.

---

##### `properties`<sup>Optional</sup> <a name="properties" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceConfig.property.properties"></a>

```typescript
public readonly properties: IResolvable | StackMonitoringMonitoredResourceProperties[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceProperties">StackMonitoringMonitoredResourceProperties</a>[]

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource#properties StackMonitoringMonitoredResource#properties}

---

##### `resourceTimeZone`<sup>Optional</sup> <a name="resourceTimeZone" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceConfig.property.resourceTimeZone"></a>

```typescript
public readonly resourceTimeZone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource#resource_time_zone StackMonitoringMonitoredResource#resource_time_zone}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: StackMonitoringMonitoredResourceTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceTimeouts">StackMonitoringMonitoredResourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource#timeouts StackMonitoringMonitoredResource#timeouts}

---

### StackMonitoringMonitoredResourceCredentials <a name="StackMonitoringMonitoredResourceCredentials" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentials"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentials.Initializer"></a>

```typescript
import { stackMonitoringMonitoredResource } from 'rhizo-co-terraform-provider-oci'

const stackMonitoringMonitoredResourceCredentials: stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentials = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentials.property.credentialType">credentialType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource#credential_type StackMonitoringMonitoredResource#credential_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentials.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource#description StackMonitoringMonitoredResource#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentials.property.keyId">keyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource#key_id StackMonitoringMonitoredResource#key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentials.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource#name StackMonitoringMonitoredResource#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentials.property.properties">properties</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsProperties">StackMonitoringMonitoredResourceCredentialsProperties</a>[]</code> | properties block. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentials.property.source">source</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource#source StackMonitoringMonitoredResource#source}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentials.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource#type StackMonitoringMonitoredResource#type}. |

---

##### `credentialType`<sup>Optional</sup> <a name="credentialType" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentials.property.credentialType"></a>

```typescript
public readonly credentialType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource#credential_type StackMonitoringMonitoredResource#credential_type}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentials.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource#description StackMonitoringMonitoredResource#description}.

---

##### `keyId`<sup>Optional</sup> <a name="keyId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentials.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource#key_id StackMonitoringMonitoredResource#key_id}.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentials.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource#name StackMonitoringMonitoredResource#name}.

---

##### `properties`<sup>Optional</sup> <a name="properties" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentials.property.properties"></a>

```typescript
public readonly properties: IResolvable | StackMonitoringMonitoredResourceCredentialsProperties[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsProperties">StackMonitoringMonitoredResourceCredentialsProperties</a>[]

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource#properties StackMonitoringMonitoredResource#properties}

---

##### `source`<sup>Optional</sup> <a name="source" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentials.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource#source StackMonitoringMonitoredResource#source}.

---

##### `type`<sup>Optional</sup> <a name="type" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentials.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource#type StackMonitoringMonitoredResource#type}.

---

### StackMonitoringMonitoredResourceCredentialsProperties <a name="StackMonitoringMonitoredResourceCredentialsProperties" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsProperties"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsProperties.Initializer"></a>

```typescript
import { stackMonitoringMonitoredResource } from 'rhizo-co-terraform-provider-oci'

const stackMonitoringMonitoredResourceCredentialsProperties: stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsProperties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsProperties.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource#name StackMonitoringMonitoredResource#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsProperties.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource#value StackMonitoringMonitoredResource#value}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsProperties.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource#name StackMonitoringMonitoredResource#name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsProperties.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource#value StackMonitoringMonitoredResource#value}.

---

### StackMonitoringMonitoredResourceDatabaseConnectionDetails <a name="StackMonitoringMonitoredResourceDatabaseConnectionDetails" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceDatabaseConnectionDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceDatabaseConnectionDetails.Initializer"></a>

```typescript
import { stackMonitoringMonitoredResource } from 'rhizo-co-terraform-provider-oci'

const stackMonitoringMonitoredResourceDatabaseConnectionDetails: stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceDatabaseConnectionDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceDatabaseConnectionDetails.property.port">port</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource#port StackMonitoringMonitoredResource#port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceDatabaseConnectionDetails.property.protocol">protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource#protocol StackMonitoringMonitoredResource#protocol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceDatabaseConnectionDetails.property.serviceName">serviceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource#service_name StackMonitoringMonitoredResource#service_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceDatabaseConnectionDetails.property.connectorId">connectorId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource#connector_id StackMonitoringMonitoredResource#connector_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceDatabaseConnectionDetails.property.dbId">dbId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource#db_id StackMonitoringMonitoredResource#db_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceDatabaseConnectionDetails.property.dbUniqueName">dbUniqueName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource#db_unique_name StackMonitoringMonitoredResource#db_unique_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceDatabaseConnectionDetails.property.sslSecretId">sslSecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource#ssl_secret_id StackMonitoringMonitoredResource#ssl_secret_id}. |

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceDatabaseConnectionDetails.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource#port StackMonitoringMonitoredResource#port}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceDatabaseConnectionDetails.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource#protocol StackMonitoringMonitoredResource#protocol}.

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceDatabaseConnectionDetails.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource#service_name StackMonitoringMonitoredResource#service_name}.

---

##### `connectorId`<sup>Optional</sup> <a name="connectorId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceDatabaseConnectionDetails.property.connectorId"></a>

```typescript
public readonly connectorId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource#connector_id StackMonitoringMonitoredResource#connector_id}.

---

##### `dbId`<sup>Optional</sup> <a name="dbId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceDatabaseConnectionDetails.property.dbId"></a>

```typescript
public readonly dbId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource#db_id StackMonitoringMonitoredResource#db_id}.

---

##### `dbUniqueName`<sup>Optional</sup> <a name="dbUniqueName" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceDatabaseConnectionDetails.property.dbUniqueName"></a>

```typescript
public readonly dbUniqueName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource#db_unique_name StackMonitoringMonitoredResource#db_unique_name}.

---

##### `sslSecretId`<sup>Optional</sup> <a name="sslSecretId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceDatabaseConnectionDetails.property.sslSecretId"></a>

```typescript
public readonly sslSecretId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource#ssl_secret_id StackMonitoringMonitoredResource#ssl_secret_id}.

---

### StackMonitoringMonitoredResourceProperties <a name="StackMonitoringMonitoredResourceProperties" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceProperties"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceProperties.Initializer"></a>

```typescript
import { stackMonitoringMonitoredResource } from 'rhizo-co-terraform-provider-oci'

const stackMonitoringMonitoredResourceProperties: stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceProperties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceProperties.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource#name StackMonitoringMonitoredResource#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceProperties.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource#value StackMonitoringMonitoredResource#value}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceProperties.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource#name StackMonitoringMonitoredResource#name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceProperties.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource#value StackMonitoringMonitoredResource#value}.

---

### StackMonitoringMonitoredResourceTimeouts <a name="StackMonitoringMonitoredResourceTimeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceTimeouts.Initializer"></a>

```typescript
import { stackMonitoringMonitoredResource } from 'rhizo-co-terraform-provider-oci'

const stackMonitoringMonitoredResourceTimeouts: stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource#create StackMonitoringMonitoredResource#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource#delete StackMonitoringMonitoredResource#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource#update StackMonitoringMonitoredResource#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource#create StackMonitoringMonitoredResource#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource#delete StackMonitoringMonitoredResource#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource#update StackMonitoringMonitoredResource#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StackMonitoringMonitoredResourceAdditionalAliasesCredentialOutputReference <a name="StackMonitoringMonitoredResourceAdditionalAliasesCredentialOutputReference" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesCredentialOutputReference.Initializer"></a>

```typescript
import { stackMonitoringMonitoredResource } from 'rhizo-co-terraform-provider-oci'

new stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesCredentialOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesCredentialOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesCredentialOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesCredentialOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesCredentialOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesCredentialOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesCredentialOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesCredentialOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesCredentialOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesCredentialOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesCredentialOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesCredentialOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesCredentialOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesCredentialOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesCredentialOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesCredentialOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesCredentialOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesCredentialOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesCredentialOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesCredentialOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesCredentialOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesCredentialOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesCredentialOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesCredentialOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesCredentialOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesCredentialOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesCredentialOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesCredentialOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesCredentialOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesCredentialOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesCredentialOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesCredentialOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesCredentialOutputReference.property.serviceInput">serviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesCredentialOutputReference.property.sourceInput">sourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesCredentialOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesCredentialOutputReference.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesCredentialOutputReference.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesCredentialOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesCredential">StackMonitoringMonitoredResourceAdditionalAliasesCredential</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesCredentialOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesCredentialOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesCredentialOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesCredentialOutputReference.property.serviceInput"></a>

```typescript
public readonly serviceInput: string;
```

- *Type:* string

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesCredentialOutputReference.property.sourceInput"></a>

```typescript
public readonly sourceInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesCredentialOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesCredentialOutputReference.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesCredentialOutputReference.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesCredentialOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StackMonitoringMonitoredResourceAdditionalAliasesCredential;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesCredential">StackMonitoringMonitoredResourceAdditionalAliasesCredential</a>

---


### StackMonitoringMonitoredResourceAdditionalAliasesList <a name="StackMonitoringMonitoredResourceAdditionalAliasesList" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesList.Initializer"></a>

```typescript
import { stackMonitoringMonitoredResource } from 'rhizo-co-terraform-provider-oci'

new stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesList.get"></a>

```typescript
public get(index: number): StackMonitoringMonitoredResourceAdditionalAliasesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliases">StackMonitoringMonitoredResourceAdditionalAliases</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StackMonitoringMonitoredResourceAdditionalAliases[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliases">StackMonitoringMonitoredResourceAdditionalAliases</a>[]

---


### StackMonitoringMonitoredResourceAdditionalAliasesOutputReference <a name="StackMonitoringMonitoredResourceAdditionalAliasesOutputReference" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesOutputReference.Initializer"></a>

```typescript
import { stackMonitoringMonitoredResource } from 'rhizo-co-terraform-provider-oci'

new stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesOutputReference.putCredential">putCredential</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCredential` <a name="putCredential" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesOutputReference.putCredential"></a>

```typescript
public putCredential(value: StackMonitoringMonitoredResourceAdditionalAliasesCredential): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesOutputReference.putCredential.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesCredential">StackMonitoringMonitoredResourceAdditionalAliasesCredential</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesOutputReference.property.credential">credential</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesCredentialOutputReference">StackMonitoringMonitoredResourceAdditionalAliasesCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesOutputReference.property.credentialInput">credentialInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesCredential">StackMonitoringMonitoredResourceAdditionalAliasesCredential</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesOutputReference.property.sourceInput">sourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesOutputReference.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliases">StackMonitoringMonitoredResourceAdditionalAliases</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `credential`<sup>Required</sup> <a name="credential" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesOutputReference.property.credential"></a>

```typescript
public readonly credential: StackMonitoringMonitoredResourceAdditionalAliasesCredentialOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesCredentialOutputReference">StackMonitoringMonitoredResourceAdditionalAliasesCredentialOutputReference</a>

---

##### `credentialInput`<sup>Optional</sup> <a name="credentialInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesOutputReference.property.credentialInput"></a>

```typescript
public readonly credentialInput: StackMonitoringMonitoredResourceAdditionalAliasesCredential;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesCredential">StackMonitoringMonitoredResourceAdditionalAliasesCredential</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesOutputReference.property.sourceInput"></a>

```typescript
public readonly sourceInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesOutputReference.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliasesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StackMonitoringMonitoredResourceAdditionalAliases;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalAliases">StackMonitoringMonitoredResourceAdditionalAliases</a>

---


### StackMonitoringMonitoredResourceAdditionalCredentialsList <a name="StackMonitoringMonitoredResourceAdditionalCredentialsList" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsList.Initializer"></a>

```typescript
import { stackMonitoringMonitoredResource } from 'rhizo-co-terraform-provider-oci'

new stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsList.get"></a>

```typescript
public get(index: number): StackMonitoringMonitoredResourceAdditionalCredentialsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentials">StackMonitoringMonitoredResourceAdditionalCredentials</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StackMonitoringMonitoredResourceAdditionalCredentials[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentials">StackMonitoringMonitoredResourceAdditionalCredentials</a>[]

---


### StackMonitoringMonitoredResourceAdditionalCredentialsOutputReference <a name="StackMonitoringMonitoredResourceAdditionalCredentialsOutputReference" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsOutputReference.Initializer"></a>

```typescript
import { stackMonitoringMonitoredResource } from 'rhizo-co-terraform-provider-oci'

new stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsOutputReference.putProperties">putProperties</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsOutputReference.resetCredentialType">resetCredentialType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsOutputReference.resetKeyId">resetKeyId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsOutputReference.resetProperties">resetProperties</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsOutputReference.resetSource">resetSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putProperties` <a name="putProperties" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsOutputReference.putProperties"></a>

```typescript
public putProperties(value: IResolvable | StackMonitoringMonitoredResourceAdditionalCredentialsProperties[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsOutputReference.putProperties.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsProperties">StackMonitoringMonitoredResourceAdditionalCredentialsProperties</a>[]

---

##### `resetCredentialType` <a name="resetCredentialType" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsOutputReference.resetCredentialType"></a>

```typescript
public resetCredentialType(): void
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetKeyId` <a name="resetKeyId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsOutputReference.resetKeyId"></a>

```typescript
public resetKeyId(): void
```

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetProperties` <a name="resetProperties" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsOutputReference.resetProperties"></a>

```typescript
public resetProperties(): void
```

##### `resetSource` <a name="resetSource" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsOutputReference.resetSource"></a>

```typescript
public resetSource(): void
```

##### `resetType` <a name="resetType" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsOutputReference.property.properties">properties</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsPropertiesList">StackMonitoringMonitoredResourceAdditionalCredentialsPropertiesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsOutputReference.property.credentialTypeInput">credentialTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsOutputReference.property.keyIdInput">keyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsOutputReference.property.propertiesInput">propertiesInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsProperties">StackMonitoringMonitoredResourceAdditionalCredentialsProperties</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsOutputReference.property.sourceInput">sourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsOutputReference.property.credentialType">credentialType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsOutputReference.property.keyId">keyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsOutputReference.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentials">StackMonitoringMonitoredResourceAdditionalCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `properties`<sup>Required</sup> <a name="properties" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsOutputReference.property.properties"></a>

```typescript
public readonly properties: StackMonitoringMonitoredResourceAdditionalCredentialsPropertiesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsPropertiesList">StackMonitoringMonitoredResourceAdditionalCredentialsPropertiesList</a>

---

##### `credentialTypeInput`<sup>Optional</sup> <a name="credentialTypeInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsOutputReference.property.credentialTypeInput"></a>

```typescript
public readonly credentialTypeInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `keyIdInput`<sup>Optional</sup> <a name="keyIdInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsOutputReference.property.keyIdInput"></a>

```typescript
public readonly keyIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsOutputReference.property.propertiesInput"></a>

```typescript
public readonly propertiesInput: IResolvable | StackMonitoringMonitoredResourceAdditionalCredentialsProperties[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsProperties">StackMonitoringMonitoredResourceAdditionalCredentialsProperties</a>[]

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsOutputReference.property.sourceInput"></a>

```typescript
public readonly sourceInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `credentialType`<sup>Required</sup> <a name="credentialType" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsOutputReference.property.credentialType"></a>

```typescript
public readonly credentialType: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsOutputReference.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsOutputReference.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StackMonitoringMonitoredResourceAdditionalCredentials;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentials">StackMonitoringMonitoredResourceAdditionalCredentials</a>

---


### StackMonitoringMonitoredResourceAdditionalCredentialsPropertiesList <a name="StackMonitoringMonitoredResourceAdditionalCredentialsPropertiesList" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsPropertiesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsPropertiesList.Initializer"></a>

```typescript
import { stackMonitoringMonitoredResource } from 'rhizo-co-terraform-provider-oci'

new stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsPropertiesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsPropertiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsPropertiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsPropertiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsPropertiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsPropertiesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsPropertiesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsPropertiesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsPropertiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsPropertiesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsPropertiesList.get"></a>

```typescript
public get(index: number): StackMonitoringMonitoredResourceAdditionalCredentialsPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsPropertiesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsPropertiesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsPropertiesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsPropertiesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsProperties">StackMonitoringMonitoredResourceAdditionalCredentialsProperties</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsPropertiesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsPropertiesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsPropertiesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StackMonitoringMonitoredResourceAdditionalCredentialsProperties[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsProperties">StackMonitoringMonitoredResourceAdditionalCredentialsProperties</a>[]

---


### StackMonitoringMonitoredResourceAdditionalCredentialsPropertiesOutputReference <a name="StackMonitoringMonitoredResourceAdditionalCredentialsPropertiesOutputReference" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsPropertiesOutputReference.Initializer"></a>

```typescript
import { stackMonitoringMonitoredResource } from 'rhizo-co-terraform-provider-oci'

new stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsPropertiesOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsPropertiesOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsPropertiesOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetValue` <a name="resetValue" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsPropertiesOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsPropertiesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsPropertiesOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsPropertiesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsPropertiesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsProperties">StackMonitoringMonitoredResourceAdditionalCredentialsProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsPropertiesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsPropertiesOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsPropertiesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsPropertiesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StackMonitoringMonitoredResourceAdditionalCredentialsProperties;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAdditionalCredentialsProperties">StackMonitoringMonitoredResourceAdditionalCredentialsProperties</a>

---


### StackMonitoringMonitoredResourceAliasesCredentialOutputReference <a name="StackMonitoringMonitoredResourceAliasesCredentialOutputReference" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesCredentialOutputReference.Initializer"></a>

```typescript
import { stackMonitoringMonitoredResource } from 'rhizo-co-terraform-provider-oci'

new stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesCredentialOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesCredentialOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesCredentialOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesCredentialOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesCredentialOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesCredentialOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesCredentialOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesCredentialOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesCredentialOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesCredentialOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesCredentialOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesCredentialOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesCredentialOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesCredentialOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesCredentialOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesCredentialOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesCredentialOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesCredentialOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesCredentialOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesCredentialOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesCredentialOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesCredentialOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesCredentialOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesCredentialOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesCredentialOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesCredentialOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesCredentialOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesCredentialOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesCredentialOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesCredentialOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesCredentialOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesCredentialOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesCredentialOutputReference.property.serviceInput">serviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesCredentialOutputReference.property.sourceInput">sourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesCredentialOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesCredentialOutputReference.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesCredentialOutputReference.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesCredentialOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesCredential">StackMonitoringMonitoredResourceAliasesCredential</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesCredentialOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesCredentialOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesCredentialOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesCredentialOutputReference.property.serviceInput"></a>

```typescript
public readonly serviceInput: string;
```

- *Type:* string

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesCredentialOutputReference.property.sourceInput"></a>

```typescript
public readonly sourceInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesCredentialOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesCredentialOutputReference.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesCredentialOutputReference.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesCredentialOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StackMonitoringMonitoredResourceAliasesCredential;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesCredential">StackMonitoringMonitoredResourceAliasesCredential</a>

---


### StackMonitoringMonitoredResourceAliasesOutputReference <a name="StackMonitoringMonitoredResourceAliasesOutputReference" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesOutputReference.Initializer"></a>

```typescript
import { stackMonitoringMonitoredResource } from 'rhizo-co-terraform-provider-oci'

new stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesOutputReference.putCredential">putCredential</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCredential` <a name="putCredential" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesOutputReference.putCredential"></a>

```typescript
public putCredential(value: StackMonitoringMonitoredResourceAliasesCredential): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesOutputReference.putCredential.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesCredential">StackMonitoringMonitoredResourceAliasesCredential</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesOutputReference.property.credential">credential</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesCredentialOutputReference">StackMonitoringMonitoredResourceAliasesCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesOutputReference.property.credentialInput">credentialInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesCredential">StackMonitoringMonitoredResourceAliasesCredential</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesOutputReference.property.sourceInput">sourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesOutputReference.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliases">StackMonitoringMonitoredResourceAliases</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `credential`<sup>Required</sup> <a name="credential" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesOutputReference.property.credential"></a>

```typescript
public readonly credential: StackMonitoringMonitoredResourceAliasesCredentialOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesCredentialOutputReference">StackMonitoringMonitoredResourceAliasesCredentialOutputReference</a>

---

##### `credentialInput`<sup>Optional</sup> <a name="credentialInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesOutputReference.property.credentialInput"></a>

```typescript
public readonly credentialInput: StackMonitoringMonitoredResourceAliasesCredential;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesCredential">StackMonitoringMonitoredResourceAliasesCredential</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesOutputReference.property.sourceInput"></a>

```typescript
public readonly sourceInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesOutputReference.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliasesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StackMonitoringMonitoredResourceAliases;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceAliases">StackMonitoringMonitoredResourceAliases</a>

---


### StackMonitoringMonitoredResourceCredentialsOutputReference <a name="StackMonitoringMonitoredResourceCredentialsOutputReference" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsOutputReference.Initializer"></a>

```typescript
import { stackMonitoringMonitoredResource } from 'rhizo-co-terraform-provider-oci'

new stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsOutputReference.putProperties">putProperties</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsOutputReference.resetCredentialType">resetCredentialType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsOutputReference.resetKeyId">resetKeyId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsOutputReference.resetProperties">resetProperties</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsOutputReference.resetSource">resetSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putProperties` <a name="putProperties" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsOutputReference.putProperties"></a>

```typescript
public putProperties(value: IResolvable | StackMonitoringMonitoredResourceCredentialsProperties[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsOutputReference.putProperties.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsProperties">StackMonitoringMonitoredResourceCredentialsProperties</a>[]

---

##### `resetCredentialType` <a name="resetCredentialType" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsOutputReference.resetCredentialType"></a>

```typescript
public resetCredentialType(): void
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetKeyId` <a name="resetKeyId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsOutputReference.resetKeyId"></a>

```typescript
public resetKeyId(): void
```

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetProperties` <a name="resetProperties" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsOutputReference.resetProperties"></a>

```typescript
public resetProperties(): void
```

##### `resetSource` <a name="resetSource" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsOutputReference.resetSource"></a>

```typescript
public resetSource(): void
```

##### `resetType` <a name="resetType" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsOutputReference.property.properties">properties</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsPropertiesList">StackMonitoringMonitoredResourceCredentialsPropertiesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsOutputReference.property.credentialTypeInput">credentialTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsOutputReference.property.keyIdInput">keyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsOutputReference.property.propertiesInput">propertiesInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsProperties">StackMonitoringMonitoredResourceCredentialsProperties</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsOutputReference.property.sourceInput">sourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsOutputReference.property.credentialType">credentialType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsOutputReference.property.keyId">keyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsOutputReference.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentials">StackMonitoringMonitoredResourceCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `properties`<sup>Required</sup> <a name="properties" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsOutputReference.property.properties"></a>

```typescript
public readonly properties: StackMonitoringMonitoredResourceCredentialsPropertiesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsPropertiesList">StackMonitoringMonitoredResourceCredentialsPropertiesList</a>

---

##### `credentialTypeInput`<sup>Optional</sup> <a name="credentialTypeInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsOutputReference.property.credentialTypeInput"></a>

```typescript
public readonly credentialTypeInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `keyIdInput`<sup>Optional</sup> <a name="keyIdInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsOutputReference.property.keyIdInput"></a>

```typescript
public readonly keyIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsOutputReference.property.propertiesInput"></a>

```typescript
public readonly propertiesInput: IResolvable | StackMonitoringMonitoredResourceCredentialsProperties[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsProperties">StackMonitoringMonitoredResourceCredentialsProperties</a>[]

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsOutputReference.property.sourceInput"></a>

```typescript
public readonly sourceInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `credentialType`<sup>Required</sup> <a name="credentialType" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsOutputReference.property.credentialType"></a>

```typescript
public readonly credentialType: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsOutputReference.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsOutputReference.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StackMonitoringMonitoredResourceCredentials;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentials">StackMonitoringMonitoredResourceCredentials</a>

---


### StackMonitoringMonitoredResourceCredentialsPropertiesList <a name="StackMonitoringMonitoredResourceCredentialsPropertiesList" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsPropertiesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsPropertiesList.Initializer"></a>

```typescript
import { stackMonitoringMonitoredResource } from 'rhizo-co-terraform-provider-oci'

new stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsPropertiesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsPropertiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsPropertiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsPropertiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsPropertiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsPropertiesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsPropertiesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsPropertiesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsPropertiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsPropertiesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsPropertiesList.get"></a>

```typescript
public get(index: number): StackMonitoringMonitoredResourceCredentialsPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsPropertiesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsPropertiesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsPropertiesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsPropertiesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsProperties">StackMonitoringMonitoredResourceCredentialsProperties</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsPropertiesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsPropertiesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsPropertiesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StackMonitoringMonitoredResourceCredentialsProperties[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsProperties">StackMonitoringMonitoredResourceCredentialsProperties</a>[]

---


### StackMonitoringMonitoredResourceCredentialsPropertiesOutputReference <a name="StackMonitoringMonitoredResourceCredentialsPropertiesOutputReference" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsPropertiesOutputReference.Initializer"></a>

```typescript
import { stackMonitoringMonitoredResource } from 'rhizo-co-terraform-provider-oci'

new stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsPropertiesOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsPropertiesOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsPropertiesOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetValue` <a name="resetValue" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsPropertiesOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsPropertiesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsPropertiesOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsPropertiesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsPropertiesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsProperties">StackMonitoringMonitoredResourceCredentialsProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsPropertiesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsPropertiesOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsPropertiesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsPropertiesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StackMonitoringMonitoredResourceCredentialsProperties;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceCredentialsProperties">StackMonitoringMonitoredResourceCredentialsProperties</a>

---


### StackMonitoringMonitoredResourceDatabaseConnectionDetailsOutputReference <a name="StackMonitoringMonitoredResourceDatabaseConnectionDetailsOutputReference" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceDatabaseConnectionDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceDatabaseConnectionDetailsOutputReference.Initializer"></a>

```typescript
import { stackMonitoringMonitoredResource } from 'rhizo-co-terraform-provider-oci'

new stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceDatabaseConnectionDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceDatabaseConnectionDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceDatabaseConnectionDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceDatabaseConnectionDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceDatabaseConnectionDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceDatabaseConnectionDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceDatabaseConnectionDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceDatabaseConnectionDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceDatabaseConnectionDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceDatabaseConnectionDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceDatabaseConnectionDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceDatabaseConnectionDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceDatabaseConnectionDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceDatabaseConnectionDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceDatabaseConnectionDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceDatabaseConnectionDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceDatabaseConnectionDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceDatabaseConnectionDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceDatabaseConnectionDetailsOutputReference.resetConnectorId">resetConnectorId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceDatabaseConnectionDetailsOutputReference.resetDbId">resetDbId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceDatabaseConnectionDetailsOutputReference.resetDbUniqueName">resetDbUniqueName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceDatabaseConnectionDetailsOutputReference.resetSslSecretId">resetSslSecretId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceDatabaseConnectionDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceDatabaseConnectionDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceDatabaseConnectionDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceDatabaseConnectionDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceDatabaseConnectionDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceDatabaseConnectionDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceDatabaseConnectionDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceDatabaseConnectionDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceDatabaseConnectionDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceDatabaseConnectionDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceDatabaseConnectionDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceDatabaseConnectionDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceDatabaseConnectionDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceDatabaseConnectionDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceDatabaseConnectionDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceDatabaseConnectionDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceDatabaseConnectionDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceDatabaseConnectionDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceDatabaseConnectionDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceDatabaseConnectionDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceDatabaseConnectionDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceDatabaseConnectionDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceDatabaseConnectionDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceDatabaseConnectionDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConnectorId` <a name="resetConnectorId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceDatabaseConnectionDetailsOutputReference.resetConnectorId"></a>

```typescript
public resetConnectorId(): void
```

##### `resetDbId` <a name="resetDbId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceDatabaseConnectionDetailsOutputReference.resetDbId"></a>

```typescript
public resetDbId(): void
```

##### `resetDbUniqueName` <a name="resetDbUniqueName" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceDatabaseConnectionDetailsOutputReference.resetDbUniqueName"></a>

```typescript
public resetDbUniqueName(): void
```

##### `resetSslSecretId` <a name="resetSslSecretId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceDatabaseConnectionDetailsOutputReference.resetSslSecretId"></a>

```typescript
public resetSslSecretId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceDatabaseConnectionDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceDatabaseConnectionDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceDatabaseConnectionDetailsOutputReference.property.connectorIdInput">connectorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceDatabaseConnectionDetailsOutputReference.property.dbIdInput">dbIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceDatabaseConnectionDetailsOutputReference.property.dbUniqueNameInput">dbUniqueNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceDatabaseConnectionDetailsOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceDatabaseConnectionDetailsOutputReference.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceDatabaseConnectionDetailsOutputReference.property.serviceNameInput">serviceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceDatabaseConnectionDetailsOutputReference.property.sslSecretIdInput">sslSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceDatabaseConnectionDetailsOutputReference.property.connectorId">connectorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceDatabaseConnectionDetailsOutputReference.property.dbId">dbId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceDatabaseConnectionDetailsOutputReference.property.dbUniqueName">dbUniqueName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceDatabaseConnectionDetailsOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceDatabaseConnectionDetailsOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceDatabaseConnectionDetailsOutputReference.property.serviceName">serviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceDatabaseConnectionDetailsOutputReference.property.sslSecretId">sslSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceDatabaseConnectionDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceDatabaseConnectionDetails">StackMonitoringMonitoredResourceDatabaseConnectionDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceDatabaseConnectionDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceDatabaseConnectionDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `connectorIdInput`<sup>Optional</sup> <a name="connectorIdInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceDatabaseConnectionDetailsOutputReference.property.connectorIdInput"></a>

```typescript
public readonly connectorIdInput: string;
```

- *Type:* string

---

##### `dbIdInput`<sup>Optional</sup> <a name="dbIdInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceDatabaseConnectionDetailsOutputReference.property.dbIdInput"></a>

```typescript
public readonly dbIdInput: string;
```

- *Type:* string

---

##### `dbUniqueNameInput`<sup>Optional</sup> <a name="dbUniqueNameInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceDatabaseConnectionDetailsOutputReference.property.dbUniqueNameInput"></a>

```typescript
public readonly dbUniqueNameInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceDatabaseConnectionDetailsOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceDatabaseConnectionDetailsOutputReference.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `serviceNameInput`<sup>Optional</sup> <a name="serviceNameInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceDatabaseConnectionDetailsOutputReference.property.serviceNameInput"></a>

```typescript
public readonly serviceNameInput: string;
```

- *Type:* string

---

##### `sslSecretIdInput`<sup>Optional</sup> <a name="sslSecretIdInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceDatabaseConnectionDetailsOutputReference.property.sslSecretIdInput"></a>

```typescript
public readonly sslSecretIdInput: string;
```

- *Type:* string

---

##### `connectorId`<sup>Required</sup> <a name="connectorId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceDatabaseConnectionDetailsOutputReference.property.connectorId"></a>

```typescript
public readonly connectorId: string;
```

- *Type:* string

---

##### `dbId`<sup>Required</sup> <a name="dbId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceDatabaseConnectionDetailsOutputReference.property.dbId"></a>

```typescript
public readonly dbId: string;
```

- *Type:* string

---

##### `dbUniqueName`<sup>Required</sup> <a name="dbUniqueName" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceDatabaseConnectionDetailsOutputReference.property.dbUniqueName"></a>

```typescript
public readonly dbUniqueName: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceDatabaseConnectionDetailsOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceDatabaseConnectionDetailsOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceDatabaseConnectionDetailsOutputReference.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

---

##### `sslSecretId`<sup>Required</sup> <a name="sslSecretId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceDatabaseConnectionDetailsOutputReference.property.sslSecretId"></a>

```typescript
public readonly sslSecretId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceDatabaseConnectionDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StackMonitoringMonitoredResourceDatabaseConnectionDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceDatabaseConnectionDetails">StackMonitoringMonitoredResourceDatabaseConnectionDetails</a>

---


### StackMonitoringMonitoredResourcePropertiesList <a name="StackMonitoringMonitoredResourcePropertiesList" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourcePropertiesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourcePropertiesList.Initializer"></a>

```typescript
import { stackMonitoringMonitoredResource } from 'rhizo-co-terraform-provider-oci'

new stackMonitoringMonitoredResource.StackMonitoringMonitoredResourcePropertiesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourcePropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourcePropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourcePropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourcePropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourcePropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourcePropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourcePropertiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourcePropertiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourcePropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourcePropertiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourcePropertiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourcePropertiesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourcePropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourcePropertiesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourcePropertiesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourcePropertiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourcePropertiesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourcePropertiesList.get"></a>

```typescript
public get(index: number): StackMonitoringMonitoredResourcePropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourcePropertiesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourcePropertiesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourcePropertiesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourcePropertiesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceProperties">StackMonitoringMonitoredResourceProperties</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourcePropertiesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourcePropertiesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourcePropertiesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StackMonitoringMonitoredResourceProperties[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceProperties">StackMonitoringMonitoredResourceProperties</a>[]

---


### StackMonitoringMonitoredResourcePropertiesOutputReference <a name="StackMonitoringMonitoredResourcePropertiesOutputReference" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourcePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourcePropertiesOutputReference.Initializer"></a>

```typescript
import { stackMonitoringMonitoredResource } from 'rhizo-co-terraform-provider-oci'

new stackMonitoringMonitoredResource.StackMonitoringMonitoredResourcePropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourcePropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourcePropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourcePropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourcePropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourcePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourcePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourcePropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourcePropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourcePropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourcePropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourcePropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourcePropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourcePropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourcePropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourcePropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourcePropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourcePropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourcePropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourcePropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourcePropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourcePropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourcePropertiesOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourcePropertiesOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourcePropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourcePropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourcePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourcePropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourcePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourcePropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourcePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourcePropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourcePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourcePropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourcePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourcePropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourcePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourcePropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourcePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourcePropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourcePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourcePropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourcePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourcePropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourcePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourcePropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourcePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourcePropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourcePropertiesOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetValue` <a name="resetValue" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourcePropertiesOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourcePropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourcePropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourcePropertiesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourcePropertiesOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourcePropertiesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourcePropertiesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourcePropertiesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceProperties">StackMonitoringMonitoredResourceProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourcePropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourcePropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourcePropertiesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourcePropertiesOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourcePropertiesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourcePropertiesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourcePropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StackMonitoringMonitoredResourceProperties;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceProperties">StackMonitoringMonitoredResourceProperties</a>

---


### StackMonitoringMonitoredResourceTimeoutsOutputReference <a name="StackMonitoringMonitoredResourceTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceTimeoutsOutputReference.Initializer"></a>

```typescript
import { stackMonitoringMonitoredResource } from 'rhizo-co-terraform-provider-oci'

new stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceTimeouts">StackMonitoringMonitoredResourceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StackMonitoringMonitoredResourceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResource.StackMonitoringMonitoredResourceTimeouts">StackMonitoringMonitoredResourceTimeouts</a>

---



