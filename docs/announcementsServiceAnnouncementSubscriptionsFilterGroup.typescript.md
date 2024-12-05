# `announcementsServiceAnnouncementSubscriptionsFilterGroup` Submodule <a name="`announcementsServiceAnnouncementSubscriptionsFilterGroup` Submodule" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AnnouncementsServiceAnnouncementSubscriptionsFilterGroup <a name="AnnouncementsServiceAnnouncementSubscriptionsFilterGroup" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscriptions_filter_group oci_announcements_service_announcement_subscriptions_filter_group}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.Initializer"></a>

```typescript
import { announcementsServiceAnnouncementSubscriptionsFilterGroup } from 'rhizo-co-terraform-provider-oci'

new announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup(scope: Construct, id: string, config: AnnouncementsServiceAnnouncementSubscriptionsFilterGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupConfig">AnnouncementsServiceAnnouncementSubscriptionsFilterGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupConfig">AnnouncementsServiceAnnouncementSubscriptionsFilterGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.putFilters">putFilters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFilters` <a name="putFilters" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.putFilters"></a>

```typescript
public putFilters(value: IResolvable | AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFilters[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.putFilters.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFilters">AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFilters</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.putTimeouts"></a>

```typescript
public putTimeouts(value: AnnouncementsServiceAnnouncementSubscriptionsFilterGroupTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupTimeouts">AnnouncementsServiceAnnouncementSubscriptionsFilterGroupTimeouts</a>

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AnnouncementsServiceAnnouncementSubscriptionsFilterGroup resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.isConstruct"></a>

```typescript
import { announcementsServiceAnnouncementSubscriptionsFilterGroup } from 'rhizo-co-terraform-provider-oci'

announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.isTerraformElement"></a>

```typescript
import { announcementsServiceAnnouncementSubscriptionsFilterGroup } from 'rhizo-co-terraform-provider-oci'

announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.isTerraformResource"></a>

```typescript
import { announcementsServiceAnnouncementSubscriptionsFilterGroup } from 'rhizo-co-terraform-provider-oci'

announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.generateConfigForImport"></a>

```typescript
import { announcementsServiceAnnouncementSubscriptionsFilterGroup } from 'rhizo-co-terraform-provider-oci'

announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a AnnouncementsServiceAnnouncementSubscriptionsFilterGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AnnouncementsServiceAnnouncementSubscriptionsFilterGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AnnouncementsServiceAnnouncementSubscriptionsFilterGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscriptions_filter_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AnnouncementsServiceAnnouncementSubscriptionsFilterGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.property.filters">filters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFiltersList">AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFiltersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupTimeoutsOutputReference">AnnouncementsServiceAnnouncementSubscriptionsFilterGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.property.announcementSubscriptionIdInput">announcementSubscriptionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.property.filtersInput">filtersInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFilters">AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFilters</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupTimeouts">AnnouncementsServiceAnnouncementSubscriptionsFilterGroupTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.property.announcementSubscriptionId">announcementSubscriptionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `filters`<sup>Required</sup> <a name="filters" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.property.filters"></a>

```typescript
public readonly filters: AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFiltersList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFiltersList">AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFiltersList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.property.timeouts"></a>

```typescript
public readonly timeouts: AnnouncementsServiceAnnouncementSubscriptionsFilterGroupTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupTimeoutsOutputReference">AnnouncementsServiceAnnouncementSubscriptionsFilterGroupTimeoutsOutputReference</a>

---

##### `announcementSubscriptionIdInput`<sup>Optional</sup> <a name="announcementSubscriptionIdInput" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.property.announcementSubscriptionIdInput"></a>

```typescript
public readonly announcementSubscriptionIdInput: string;
```

- *Type:* string

---

##### `filtersInput`<sup>Optional</sup> <a name="filtersInput" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.property.filtersInput"></a>

```typescript
public readonly filtersInput: IResolvable | AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFilters[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFilters">AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFilters</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | AnnouncementsServiceAnnouncementSubscriptionsFilterGroupTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupTimeouts">AnnouncementsServiceAnnouncementSubscriptionsFilterGroupTimeouts</a>

---

##### `announcementSubscriptionId`<sup>Required</sup> <a name="announcementSubscriptionId" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.property.announcementSubscriptionId"></a>

```typescript
public readonly announcementSubscriptionId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AnnouncementsServiceAnnouncementSubscriptionsFilterGroupConfig <a name="AnnouncementsServiceAnnouncementSubscriptionsFilterGroupConfig" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupConfig.Initializer"></a>

```typescript
import { announcementsServiceAnnouncementSubscriptionsFilterGroup } from 'rhizo-co-terraform-provider-oci'

const announcementsServiceAnnouncementSubscriptionsFilterGroupConfig: announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupConfig.property.announcementSubscriptionId">announcementSubscriptionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscriptions_filter_group#announcement_subscription_id AnnouncementsServiceAnnouncementSubscriptionsFilterGroup#announcement_subscription_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupConfig.property.filters">filters</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFilters">AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFilters</a>[]</code> | filters block. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscriptions_filter_group#name AnnouncementsServiceAnnouncementSubscriptionsFilterGroup#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscriptions_filter_group#id AnnouncementsServiceAnnouncementSubscriptionsFilterGroup#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupTimeouts">AnnouncementsServiceAnnouncementSubscriptionsFilterGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `announcementSubscriptionId`<sup>Required</sup> <a name="announcementSubscriptionId" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupConfig.property.announcementSubscriptionId"></a>

```typescript
public readonly announcementSubscriptionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscriptions_filter_group#announcement_subscription_id AnnouncementsServiceAnnouncementSubscriptionsFilterGroup#announcement_subscription_id}.

---

##### `filters`<sup>Required</sup> <a name="filters" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupConfig.property.filters"></a>

```typescript
public readonly filters: IResolvable | AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFilters[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFilters">AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFilters</a>[]

filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscriptions_filter_group#filters AnnouncementsServiceAnnouncementSubscriptionsFilterGroup#filters}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscriptions_filter_group#name AnnouncementsServiceAnnouncementSubscriptionsFilterGroup#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscriptions_filter_group#id AnnouncementsServiceAnnouncementSubscriptionsFilterGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupConfig.property.timeouts"></a>

```typescript
public readonly timeouts: AnnouncementsServiceAnnouncementSubscriptionsFilterGroupTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupTimeouts">AnnouncementsServiceAnnouncementSubscriptionsFilterGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscriptions_filter_group#timeouts AnnouncementsServiceAnnouncementSubscriptionsFilterGroup#timeouts}

---

### AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFilters <a name="AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFilters" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFilters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFilters.Initializer"></a>

```typescript
import { announcementsServiceAnnouncementSubscriptionsFilterGroup } from 'rhizo-co-terraform-provider-oci'

const announcementsServiceAnnouncementSubscriptionsFilterGroupFilters: announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFilters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFilters.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscriptions_filter_group#type AnnouncementsServiceAnnouncementSubscriptionsFilterGroup#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFilters.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscriptions_filter_group#value AnnouncementsServiceAnnouncementSubscriptionsFilterGroup#value}. |

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFilters.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscriptions_filter_group#type AnnouncementsServiceAnnouncementSubscriptionsFilterGroup#type}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFilters.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscriptions_filter_group#value AnnouncementsServiceAnnouncementSubscriptionsFilterGroup#value}.

---

### AnnouncementsServiceAnnouncementSubscriptionsFilterGroupTimeouts <a name="AnnouncementsServiceAnnouncementSubscriptionsFilterGroupTimeouts" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupTimeouts.Initializer"></a>

```typescript
import { announcementsServiceAnnouncementSubscriptionsFilterGroup } from 'rhizo-co-terraform-provider-oci'

const announcementsServiceAnnouncementSubscriptionsFilterGroupTimeouts: announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscriptions_filter_group#create AnnouncementsServiceAnnouncementSubscriptionsFilterGroup#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscriptions_filter_group#delete AnnouncementsServiceAnnouncementSubscriptionsFilterGroup#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscriptions_filter_group#update AnnouncementsServiceAnnouncementSubscriptionsFilterGroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscriptions_filter_group#create AnnouncementsServiceAnnouncementSubscriptionsFilterGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscriptions_filter_group#delete AnnouncementsServiceAnnouncementSubscriptionsFilterGroup#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscriptions_filter_group#update AnnouncementsServiceAnnouncementSubscriptionsFilterGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFiltersList <a name="AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFiltersList" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFiltersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFiltersList.Initializer"></a>

```typescript
import { announcementsServiceAnnouncementSubscriptionsFilterGroup } from 'rhizo-co-terraform-provider-oci'

new announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFiltersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFiltersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFiltersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFiltersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFiltersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFiltersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFiltersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFiltersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFiltersList.get"></a>

```typescript
public get(index: number): AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFiltersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFiltersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFiltersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFiltersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFilters">AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFilters</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFiltersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFiltersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFiltersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFilters[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFilters">AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFilters</a>[]

---


### AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFiltersOutputReference <a name="AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFiltersOutputReference" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFiltersOutputReference.Initializer"></a>

```typescript
import { announcementsServiceAnnouncementSubscriptionsFilterGroup } from 'rhizo-co-terraform-provider-oci'

new announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFiltersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFiltersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFiltersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFiltersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFiltersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFiltersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFiltersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFiltersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFiltersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFiltersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFiltersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFiltersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFiltersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFiltersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFiltersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFiltersOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFiltersOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFiltersOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFiltersOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFiltersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFilters">AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFiltersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFiltersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFiltersOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFiltersOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFiltersOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFiltersOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFiltersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFilters;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFilters">AnnouncementsServiceAnnouncementSubscriptionsFilterGroupFilters</a>

---


### AnnouncementsServiceAnnouncementSubscriptionsFilterGroupTimeoutsOutputReference <a name="AnnouncementsServiceAnnouncementSubscriptionsFilterGroupTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupTimeoutsOutputReference.Initializer"></a>

```typescript
import { announcementsServiceAnnouncementSubscriptionsFilterGroup } from 'rhizo-co-terraform-provider-oci'

new announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupTimeouts">AnnouncementsServiceAnnouncementSubscriptionsFilterGroupTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AnnouncementsServiceAnnouncementSubscriptionsFilterGroupTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscriptionsFilterGroup.AnnouncementsServiceAnnouncementSubscriptionsFilterGroupTimeouts">AnnouncementsServiceAnnouncementSubscriptionsFilterGroupTimeouts</a>

---



