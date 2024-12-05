# `announcementsServiceAnnouncementSubscription` Submodule <a name="`announcementsServiceAnnouncementSubscription` Submodule" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AnnouncementsServiceAnnouncementSubscription <a name="AnnouncementsServiceAnnouncementSubscription" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription oci_announcements_service_announcement_subscription}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.Initializer"></a>

```typescript
import { announcementsServiceAnnouncementSubscription } from 'rhizo-co-terraform-provider-oci'

new announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription(scope: Construct, id: string, config: AnnouncementsServiceAnnouncementSubscriptionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionConfig">AnnouncementsServiceAnnouncementSubscriptionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionConfig">AnnouncementsServiceAnnouncementSubscriptionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.putFilterGroups">putFilterGroups</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.resetFilterGroups">resetFilterGroups</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.resetPreferredLanguage">resetPreferredLanguage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.resetPreferredTimeZone">resetPreferredTimeZone</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFilterGroups` <a name="putFilterGroups" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.putFilterGroups"></a>

```typescript
public putFilterGroups(value: AnnouncementsServiceAnnouncementSubscriptionFilterGroups): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.putFilterGroups.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroups">AnnouncementsServiceAnnouncementSubscriptionFilterGroups</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.putTimeouts"></a>

```typescript
public putTimeouts(value: AnnouncementsServiceAnnouncementSubscriptionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeouts">AnnouncementsServiceAnnouncementSubscriptionTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetFilterGroups` <a name="resetFilterGroups" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.resetFilterGroups"></a>

```typescript
public resetFilterGroups(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPreferredLanguage` <a name="resetPreferredLanguage" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.resetPreferredLanguage"></a>

```typescript
public resetPreferredLanguage(): void
```

##### `resetPreferredTimeZone` <a name="resetPreferredTimeZone" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.resetPreferredTimeZone"></a>

```typescript
public resetPreferredTimeZone(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AnnouncementsServiceAnnouncementSubscription resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.isConstruct"></a>

```typescript
import { announcementsServiceAnnouncementSubscription } from 'rhizo-co-terraform-provider-oci'

announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.isTerraformElement"></a>

```typescript
import { announcementsServiceAnnouncementSubscription } from 'rhizo-co-terraform-provider-oci'

announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.isTerraformResource"></a>

```typescript
import { announcementsServiceAnnouncementSubscription } from 'rhizo-co-terraform-provider-oci'

announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.generateConfigForImport"></a>

```typescript
import { announcementsServiceAnnouncementSubscription } from 'rhizo-co-terraform-provider-oci'

announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a AnnouncementsServiceAnnouncementSubscription resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AnnouncementsServiceAnnouncementSubscription to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AnnouncementsServiceAnnouncementSubscription that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AnnouncementsServiceAnnouncementSubscription to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.filterGroups">filterGroups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference">AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference">AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.filterGroupsInput">filterGroupsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroups">AnnouncementsServiceAnnouncementSubscriptionFilterGroups</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.onsTopicIdInput">onsTopicIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.preferredLanguageInput">preferredLanguageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.preferredTimeZoneInput">preferredTimeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeouts">AnnouncementsServiceAnnouncementSubscriptionTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.onsTopicId">onsTopicId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.preferredLanguage">preferredLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.preferredTimeZone">preferredTimeZone</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `filterGroups`<sup>Required</sup> <a name="filterGroups" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.filterGroups"></a>

```typescript
public readonly filterGroups: AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference">AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference</a>

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.timeouts"></a>

```typescript
public readonly timeouts: AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference">AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterGroupsInput`<sup>Optional</sup> <a name="filterGroupsInput" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.filterGroupsInput"></a>

```typescript
public readonly filterGroupsInput: AnnouncementsServiceAnnouncementSubscriptionFilterGroups;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroups">AnnouncementsServiceAnnouncementSubscriptionFilterGroups</a>

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `onsTopicIdInput`<sup>Optional</sup> <a name="onsTopicIdInput" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.onsTopicIdInput"></a>

```typescript
public readonly onsTopicIdInput: string;
```

- *Type:* string

---

##### `preferredLanguageInput`<sup>Optional</sup> <a name="preferredLanguageInput" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.preferredLanguageInput"></a>

```typescript
public readonly preferredLanguageInput: string;
```

- *Type:* string

---

##### `preferredTimeZoneInput`<sup>Optional</sup> <a name="preferredTimeZoneInput" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.preferredTimeZoneInput"></a>

```typescript
public readonly preferredTimeZoneInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | AnnouncementsServiceAnnouncementSubscriptionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeouts">AnnouncementsServiceAnnouncementSubscriptionTimeouts</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `onsTopicId`<sup>Required</sup> <a name="onsTopicId" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.onsTopicId"></a>

```typescript
public readonly onsTopicId: string;
```

- *Type:* string

---

##### `preferredLanguage`<sup>Required</sup> <a name="preferredLanguage" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.preferredLanguage"></a>

```typescript
public readonly preferredLanguage: string;
```

- *Type:* string

---

##### `preferredTimeZone`<sup>Required</sup> <a name="preferredTimeZone" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.preferredTimeZone"></a>

```typescript
public readonly preferredTimeZone: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AnnouncementsServiceAnnouncementSubscriptionConfig <a name="AnnouncementsServiceAnnouncementSubscriptionConfig" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionConfig.Initializer"></a>

```typescript
import { announcementsServiceAnnouncementSubscription } from 'rhizo-co-terraform-provider-oci'

const announcementsServiceAnnouncementSubscriptionConfig: announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription#compartment_id AnnouncementsServiceAnnouncementSubscription#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription#display_name AnnouncementsServiceAnnouncementSubscription#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionConfig.property.onsTopicId">onsTopicId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription#ons_topic_id AnnouncementsServiceAnnouncementSubscription#ons_topic_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription#defined_tags AnnouncementsServiceAnnouncementSubscription#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription#description AnnouncementsServiceAnnouncementSubscription#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionConfig.property.filterGroups">filterGroups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroups">AnnouncementsServiceAnnouncementSubscriptionFilterGroups</a></code> | filter_groups block. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription#freeform_tags AnnouncementsServiceAnnouncementSubscription#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription#id AnnouncementsServiceAnnouncementSubscription#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionConfig.property.preferredLanguage">preferredLanguage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription#preferred_language AnnouncementsServiceAnnouncementSubscription#preferred_language}. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionConfig.property.preferredTimeZone">preferredTimeZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription#preferred_time_zone AnnouncementsServiceAnnouncementSubscription#preferred_time_zone}. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeouts">AnnouncementsServiceAnnouncementSubscriptionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription#compartment_id AnnouncementsServiceAnnouncementSubscription#compartment_id}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription#display_name AnnouncementsServiceAnnouncementSubscription#display_name}.

---

##### `onsTopicId`<sup>Required</sup> <a name="onsTopicId" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionConfig.property.onsTopicId"></a>

```typescript
public readonly onsTopicId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription#ons_topic_id AnnouncementsServiceAnnouncementSubscription#ons_topic_id}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription#defined_tags AnnouncementsServiceAnnouncementSubscription#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription#description AnnouncementsServiceAnnouncementSubscription#description}.

---

##### `filterGroups`<sup>Optional</sup> <a name="filterGroups" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionConfig.property.filterGroups"></a>

```typescript
public readonly filterGroups: AnnouncementsServiceAnnouncementSubscriptionFilterGroups;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroups">AnnouncementsServiceAnnouncementSubscriptionFilterGroups</a>

filter_groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription#filter_groups AnnouncementsServiceAnnouncementSubscription#filter_groups}

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription#freeform_tags AnnouncementsServiceAnnouncementSubscription#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription#id AnnouncementsServiceAnnouncementSubscription#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `preferredLanguage`<sup>Optional</sup> <a name="preferredLanguage" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionConfig.property.preferredLanguage"></a>

```typescript
public readonly preferredLanguage: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription#preferred_language AnnouncementsServiceAnnouncementSubscription#preferred_language}.

---

##### `preferredTimeZone`<sup>Optional</sup> <a name="preferredTimeZone" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionConfig.property.preferredTimeZone"></a>

```typescript
public readonly preferredTimeZone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription#preferred_time_zone AnnouncementsServiceAnnouncementSubscription#preferred_time_zone}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: AnnouncementsServiceAnnouncementSubscriptionTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeouts">AnnouncementsServiceAnnouncementSubscriptionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription#timeouts AnnouncementsServiceAnnouncementSubscription#timeouts}

---

### AnnouncementsServiceAnnouncementSubscriptionFilterGroups <a name="AnnouncementsServiceAnnouncementSubscriptionFilterGroups" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroups.Initializer"></a>

```typescript
import { announcementsServiceAnnouncementSubscription } from 'rhizo-co-terraform-provider-oci'

const announcementsServiceAnnouncementSubscriptionFilterGroups: announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroups = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroups.property.filters">filters</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFilters">AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFilters</a>[]</code> | filters block. |

---

##### `filters`<sup>Required</sup> <a name="filters" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroups.property.filters"></a>

```typescript
public readonly filters: IResolvable | AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFilters[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFilters">AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFilters</a>[]

filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription#filters AnnouncementsServiceAnnouncementSubscription#filters}

---

### AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFilters <a name="AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFilters" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFilters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFilters.Initializer"></a>

```typescript
import { announcementsServiceAnnouncementSubscription } from 'rhizo-co-terraform-provider-oci'

const announcementsServiceAnnouncementSubscriptionFilterGroupsFilters: announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFilters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFilters.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription#type AnnouncementsServiceAnnouncementSubscription#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFilters.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription#value AnnouncementsServiceAnnouncementSubscription#value}. |

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFilters.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription#type AnnouncementsServiceAnnouncementSubscription#type}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFilters.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription#value AnnouncementsServiceAnnouncementSubscription#value}.

---

### AnnouncementsServiceAnnouncementSubscriptionTimeouts <a name="AnnouncementsServiceAnnouncementSubscriptionTimeouts" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeouts.Initializer"></a>

```typescript
import { announcementsServiceAnnouncementSubscription } from 'rhizo-co-terraform-provider-oci'

const announcementsServiceAnnouncementSubscriptionTimeouts: announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription#create AnnouncementsServiceAnnouncementSubscription#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription#delete AnnouncementsServiceAnnouncementSubscription#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription#update AnnouncementsServiceAnnouncementSubscription#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription#create AnnouncementsServiceAnnouncementSubscription#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription#delete AnnouncementsServiceAnnouncementSubscription#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription#update AnnouncementsServiceAnnouncementSubscription#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList <a name="AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.Initializer"></a>

```typescript
import { announcementsServiceAnnouncementSubscription } from 'rhizo-co-terraform-provider-oci'

new announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.get"></a>

```typescript
public get(index: number): AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFilters">AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFilters</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFilters[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFilters">AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFilters</a>[]

---


### AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference <a name="AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.Initializer"></a>

```typescript
import { announcementsServiceAnnouncementSubscription } from 'rhizo-co-terraform-provider-oci'

new announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFilters">AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFilters;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFilters">AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFilters</a>

---


### AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference <a name="AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.Initializer"></a>

```typescript
import { announcementsServiceAnnouncementSubscription } from 'rhizo-co-terraform-provider-oci'

new announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.putFilters">putFilters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFilters` <a name="putFilters" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.putFilters"></a>

```typescript
public putFilters(value: IResolvable | AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFilters[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.putFilters.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFilters">AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFilters</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.property.filters">filters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList">AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.property.filtersInput">filtersInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFilters">AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFilters</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroups">AnnouncementsServiceAnnouncementSubscriptionFilterGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `filters`<sup>Required</sup> <a name="filters" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.property.filters"></a>

```typescript
public readonly filters: AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList">AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `filtersInput`<sup>Optional</sup> <a name="filtersInput" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.property.filtersInput"></a>

```typescript
public readonly filtersInput: IResolvable | AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFilters[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFilters">AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFilters</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AnnouncementsServiceAnnouncementSubscriptionFilterGroups;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroups">AnnouncementsServiceAnnouncementSubscriptionFilterGroups</a>

---


### AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference <a name="AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.Initializer"></a>

```typescript
import { announcementsServiceAnnouncementSubscription } from 'rhizo-co-terraform-provider-oci'

new announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeouts">AnnouncementsServiceAnnouncementSubscriptionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AnnouncementsServiceAnnouncementSubscriptionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeouts">AnnouncementsServiceAnnouncementSubscriptionTimeouts</a>

---



