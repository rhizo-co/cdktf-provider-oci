# `jmsJavaDownloadsJavaLicenseAcceptanceRecord` Submodule <a name="`jmsJavaDownloadsJavaLicenseAcceptanceRecord` Submodule" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### JmsJavaDownloadsJavaLicenseAcceptanceRecord <a name="JmsJavaDownloadsJavaLicenseAcceptanceRecord" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_license_acceptance_record oci_jms_java_downloads_java_license_acceptance_record}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.Initializer"></a>

```typescript
import { jmsJavaDownloadsJavaLicenseAcceptanceRecord } from 'rhizo-co-terraform-provider-oci'

new jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord(scope: Construct, id: string, config: JmsJavaDownloadsJavaLicenseAcceptanceRecordConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordConfig">JmsJavaDownloadsJavaLicenseAcceptanceRecordConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordConfig">JmsJavaDownloadsJavaLicenseAcceptanceRecordConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.putTimeouts"></a>

```typescript
public putTimeouts(value: JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeouts">JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a JmsJavaDownloadsJavaLicenseAcceptanceRecord resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.isConstruct"></a>

```typescript
import { jmsJavaDownloadsJavaLicenseAcceptanceRecord } from 'rhizo-co-terraform-provider-oci'

jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.isTerraformElement"></a>

```typescript
import { jmsJavaDownloadsJavaLicenseAcceptanceRecord } from 'rhizo-co-terraform-provider-oci'

jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.isTerraformResource"></a>

```typescript
import { jmsJavaDownloadsJavaLicenseAcceptanceRecord } from 'rhizo-co-terraform-provider-oci'

jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.generateConfigForImport"></a>

```typescript
import { jmsJavaDownloadsJavaLicenseAcceptanceRecord } from 'rhizo-co-terraform-provider-oci'

jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a JmsJavaDownloadsJavaLicenseAcceptanceRecord resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the JmsJavaDownloadsJavaLicenseAcceptanceRecord to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing JmsJavaDownloadsJavaLicenseAcceptanceRecord that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_license_acceptance_record#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the JmsJavaDownloadsJavaLicenseAcceptanceRecord to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.createdBy">createdBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByList">JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.lastUpdatedBy">lastUpdatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByList">JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.timeAccepted">timeAccepted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.timeLastUpdated">timeLastUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference">JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.licenseAcceptanceStatusInput">licenseAcceptanceStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.licenseTypeInput">licenseTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeouts">JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.licenseAcceptanceStatus">licenseAcceptanceStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.licenseType">licenseType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.createdBy"></a>

```typescript
public readonly createdBy: JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByList">JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByList</a>

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `lastUpdatedBy`<sup>Required</sup> <a name="lastUpdatedBy" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.lastUpdatedBy"></a>

```typescript
public readonly lastUpdatedBy: JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByList">JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeAccepted`<sup>Required</sup> <a name="timeAccepted" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.timeAccepted"></a>

```typescript
public readonly timeAccepted: string;
```

- *Type:* string

---

##### `timeLastUpdated`<sup>Required</sup> <a name="timeLastUpdated" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.timeLastUpdated"></a>

```typescript
public readonly timeLastUpdated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.timeouts"></a>

```typescript
public readonly timeouts: JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference">JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `licenseAcceptanceStatusInput`<sup>Optional</sup> <a name="licenseAcceptanceStatusInput" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.licenseAcceptanceStatusInput"></a>

```typescript
public readonly licenseAcceptanceStatusInput: string;
```

- *Type:* string

---

##### `licenseTypeInput`<sup>Optional</sup> <a name="licenseTypeInput" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.licenseTypeInput"></a>

```typescript
public readonly licenseTypeInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeouts">JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeouts</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `licenseAcceptanceStatus`<sup>Required</sup> <a name="licenseAcceptanceStatus" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.licenseAcceptanceStatus"></a>

```typescript
public readonly licenseAcceptanceStatus: string;
```

- *Type:* string

---

##### `licenseType`<sup>Required</sup> <a name="licenseType" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.licenseType"></a>

```typescript
public readonly licenseType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### JmsJavaDownloadsJavaLicenseAcceptanceRecordConfig <a name="JmsJavaDownloadsJavaLicenseAcceptanceRecordConfig" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordConfig.Initializer"></a>

```typescript
import { jmsJavaDownloadsJavaLicenseAcceptanceRecord } from 'rhizo-co-terraform-provider-oci'

const jmsJavaDownloadsJavaLicenseAcceptanceRecordConfig: jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_license_acceptance_record#compartment_id JmsJavaDownloadsJavaLicenseAcceptanceRecord#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordConfig.property.licenseAcceptanceStatus">licenseAcceptanceStatus</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_license_acceptance_record#license_acceptance_status JmsJavaDownloadsJavaLicenseAcceptanceRecord#license_acceptance_status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordConfig.property.licenseType">licenseType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_license_acceptance_record#license_type JmsJavaDownloadsJavaLicenseAcceptanceRecord#license_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_license_acceptance_record#defined_tags JmsJavaDownloadsJavaLicenseAcceptanceRecord#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_license_acceptance_record#id JmsJavaDownloadsJavaLicenseAcceptanceRecord#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeouts">JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_license_acceptance_record#compartment_id JmsJavaDownloadsJavaLicenseAcceptanceRecord#compartment_id}.

---

##### `licenseAcceptanceStatus`<sup>Required</sup> <a name="licenseAcceptanceStatus" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordConfig.property.licenseAcceptanceStatus"></a>

```typescript
public readonly licenseAcceptanceStatus: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_license_acceptance_record#license_acceptance_status JmsJavaDownloadsJavaLicenseAcceptanceRecord#license_acceptance_status}.

---

##### `licenseType`<sup>Required</sup> <a name="licenseType" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordConfig.property.licenseType"></a>

```typescript
public readonly licenseType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_license_acceptance_record#license_type JmsJavaDownloadsJavaLicenseAcceptanceRecord#license_type}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_license_acceptance_record#defined_tags JmsJavaDownloadsJavaLicenseAcceptanceRecord#defined_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_license_acceptance_record#id JmsJavaDownloadsJavaLicenseAcceptanceRecord#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordConfig.property.timeouts"></a>

```typescript
public readonly timeouts: JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeouts">JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_license_acceptance_record#timeouts JmsJavaDownloadsJavaLicenseAcceptanceRecord#timeouts}

---

### JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedBy <a name="JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedBy" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedBy.Initializer"></a>

```typescript
import { jmsJavaDownloadsJavaLicenseAcceptanceRecord } from 'rhizo-co-terraform-provider-oci'

const jmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedBy: jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedBy = { ... }
```


### JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedBy <a name="JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedBy" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedBy.Initializer"></a>

```typescript
import { jmsJavaDownloadsJavaLicenseAcceptanceRecord } from 'rhizo-co-terraform-provider-oci'

const jmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedBy: jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedBy = { ... }
```


### JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeouts <a name="JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeouts" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeouts.Initializer"></a>

```typescript
import { jmsJavaDownloadsJavaLicenseAcceptanceRecord } from 'rhizo-co-terraform-provider-oci'

const jmsJavaDownloadsJavaLicenseAcceptanceRecordTimeouts: jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_license_acceptance_record#create JmsJavaDownloadsJavaLicenseAcceptanceRecord#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_license_acceptance_record#delete JmsJavaDownloadsJavaLicenseAcceptanceRecord#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_license_acceptance_record#update JmsJavaDownloadsJavaLicenseAcceptanceRecord#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_license_acceptance_record#create JmsJavaDownloadsJavaLicenseAcceptanceRecord#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_license_acceptance_record#delete JmsJavaDownloadsJavaLicenseAcceptanceRecord#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_license_acceptance_record#update JmsJavaDownloadsJavaLicenseAcceptanceRecord#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByList <a name="JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByList" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByList.Initializer"></a>

```typescript
import { jmsJavaDownloadsJavaLicenseAcceptanceRecord } from 'rhizo-co-terraform-provider-oci'

new jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByList.get"></a>

```typescript
public get(index: number): JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference <a name="JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.Initializer"></a>

```typescript
import { jmsJavaDownloadsJavaLicenseAcceptanceRecord } from 'rhizo-co-terraform-provider-oci'

new jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedBy">JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedBy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedBy">JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedBy</a>

---


### JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByList <a name="JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByList" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByList.Initializer"></a>

```typescript
import { jmsJavaDownloadsJavaLicenseAcceptanceRecord } from 'rhizo-co-terraform-provider-oci'

new jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByList.get"></a>

```typescript
public get(index: number): JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference <a name="JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.Initializer"></a>

```typescript
import { jmsJavaDownloadsJavaLicenseAcceptanceRecord } from 'rhizo-co-terraform-provider-oci'

new jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedBy">JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedBy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedBy">JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedBy</a>

---


### JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference <a name="JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.Initializer"></a>

```typescript
import { jmsJavaDownloadsJavaLicenseAcceptanceRecord } from 'rhizo-co-terraform-provider-oci'

new jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeouts">JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeouts">JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeouts</a>

---



