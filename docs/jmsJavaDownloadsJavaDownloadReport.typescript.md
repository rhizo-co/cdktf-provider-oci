# `jmsJavaDownloadsJavaDownloadReport` Submodule <a name="`jmsJavaDownloadsJavaDownloadReport` Submodule" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### JmsJavaDownloadsJavaDownloadReport <a name="JmsJavaDownloadsJavaDownloadReport" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_report oci_jms_java_downloads_java_download_report}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.Initializer"></a>

```typescript
import { jmsJavaDownloadsJavaDownloadReport } from 'rhizo-co-terraform-provider-oci'

new jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport(scope: Construct, id: string, config: JmsJavaDownloadsJavaDownloadReportConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportConfig">JmsJavaDownloadsJavaDownloadReportConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportConfig">JmsJavaDownloadsJavaDownloadReportConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.resetTimeEnd">resetTimeEnd</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.resetTimeStart">resetTimeStart</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.putTimeouts"></a>

```typescript
public putTimeouts(value: JmsJavaDownloadsJavaDownloadReportTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeouts">JmsJavaDownloadsJavaDownloadReportTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeEnd` <a name="resetTimeEnd" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.resetTimeEnd"></a>

```typescript
public resetTimeEnd(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTimeStart` <a name="resetTimeStart" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.resetTimeStart"></a>

```typescript
public resetTimeStart(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a JmsJavaDownloadsJavaDownloadReport resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.isConstruct"></a>

```typescript
import { jmsJavaDownloadsJavaDownloadReport } from 'rhizo-co-terraform-provider-oci'

jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.isTerraformElement"></a>

```typescript
import { jmsJavaDownloadsJavaDownloadReport } from 'rhizo-co-terraform-provider-oci'

jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.isTerraformResource"></a>

```typescript
import { jmsJavaDownloadsJavaDownloadReport } from 'rhizo-co-terraform-provider-oci'

jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.generateConfigForImport"></a>

```typescript
import { jmsJavaDownloadsJavaDownloadReport } from 'rhizo-co-terraform-provider-oci'

jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a JmsJavaDownloadsJavaDownloadReport resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the JmsJavaDownloadsJavaDownloadReport to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing JmsJavaDownloadsJavaDownloadReport that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_report#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the JmsJavaDownloadsJavaDownloadReport to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.checksumType">checksumType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.checksumValue">checksumValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.createdBy">createdBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByList">JmsJavaDownloadsJavaDownloadReportCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.fileSizeInBytes">fileSizeInBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.sortBy">sortBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.sortOrder">sortOrder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference">JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.formatInput">formatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.timeEndInput">timeEndInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeouts">JmsJavaDownloadsJavaDownloadReportTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.timeStartInput">timeStartInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.format">format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.timeEnd">timeEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.timeStart">timeStart</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `checksumType`<sup>Required</sup> <a name="checksumType" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.checksumType"></a>

```typescript
public readonly checksumType: string;
```

- *Type:* string

---

##### `checksumValue`<sup>Required</sup> <a name="checksumValue" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.checksumValue"></a>

```typescript
public readonly checksumValue: string;
```

- *Type:* string

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.createdBy"></a>

```typescript
public readonly createdBy: JmsJavaDownloadsJavaDownloadReportCreatedByList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByList">JmsJavaDownloadsJavaDownloadReportCreatedByList</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `fileSizeInBytes`<sup>Required</sup> <a name="fileSizeInBytes" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.fileSizeInBytes"></a>

```typescript
public readonly fileSizeInBytes: string;
```

- *Type:* string

---

##### `sortBy`<sup>Required</sup> <a name="sortBy" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.sortBy"></a>

```typescript
public readonly sortBy: string;
```

- *Type:* string

---

##### `sortOrder`<sup>Required</sup> <a name="sortOrder" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.sortOrder"></a>

```typescript
public readonly sortOrder: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.timeouts"></a>

```typescript
public readonly timeouts: JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference">JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `formatInput`<sup>Optional</sup> <a name="formatInput" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.formatInput"></a>

```typescript
public readonly formatInput: string;
```

- *Type:* string

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `timeEndInput`<sup>Optional</sup> <a name="timeEndInput" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.timeEndInput"></a>

```typescript
public readonly timeEndInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | JmsJavaDownloadsJavaDownloadReportTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeouts">JmsJavaDownloadsJavaDownloadReportTimeouts</a>

---

##### `timeStartInput`<sup>Optional</sup> <a name="timeStartInput" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.timeStartInput"></a>

```typescript
public readonly timeStartInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `format`<sup>Required</sup> <a name="format" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `timeEnd`<sup>Required</sup> <a name="timeEnd" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.timeEnd"></a>

```typescript
public readonly timeEnd: string;
```

- *Type:* string

---

##### `timeStart`<sup>Required</sup> <a name="timeStart" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.timeStart"></a>

```typescript
public readonly timeStart: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### JmsJavaDownloadsJavaDownloadReportConfig <a name="JmsJavaDownloadsJavaDownloadReportConfig" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportConfig.Initializer"></a>

```typescript
import { jmsJavaDownloadsJavaDownloadReport } from 'rhizo-co-terraform-provider-oci'

const jmsJavaDownloadsJavaDownloadReportConfig: jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_report#compartment_id JmsJavaDownloadsJavaDownloadReport#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportConfig.property.format">format</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_report#format JmsJavaDownloadsJavaDownloadReport#format}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_report#defined_tags JmsJavaDownloadsJavaDownloadReport#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_report#freeform_tags JmsJavaDownloadsJavaDownloadReport#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_report#id JmsJavaDownloadsJavaDownloadReport#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportConfig.property.timeEnd">timeEnd</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_report#time_end JmsJavaDownloadsJavaDownloadReport#time_end}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeouts">JmsJavaDownloadsJavaDownloadReportTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportConfig.property.timeStart">timeStart</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_report#time_start JmsJavaDownloadsJavaDownloadReport#time_start}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_report#compartment_id JmsJavaDownloadsJavaDownloadReport#compartment_id}.

---

##### `format`<sup>Required</sup> <a name="format" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportConfig.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_report#format JmsJavaDownloadsJavaDownloadReport#format}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_report#defined_tags JmsJavaDownloadsJavaDownloadReport#defined_tags}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_report#freeform_tags JmsJavaDownloadsJavaDownloadReport#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_report#id JmsJavaDownloadsJavaDownloadReport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeEnd`<sup>Optional</sup> <a name="timeEnd" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportConfig.property.timeEnd"></a>

```typescript
public readonly timeEnd: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_report#time_end JmsJavaDownloadsJavaDownloadReport#time_end}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportConfig.property.timeouts"></a>

```typescript
public readonly timeouts: JmsJavaDownloadsJavaDownloadReportTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeouts">JmsJavaDownloadsJavaDownloadReportTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_report#timeouts JmsJavaDownloadsJavaDownloadReport#timeouts}

---

##### `timeStart`<sup>Optional</sup> <a name="timeStart" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportConfig.property.timeStart"></a>

```typescript
public readonly timeStart: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_report#time_start JmsJavaDownloadsJavaDownloadReport#time_start}.

---

### JmsJavaDownloadsJavaDownloadReportCreatedBy <a name="JmsJavaDownloadsJavaDownloadReportCreatedBy" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedBy.Initializer"></a>

```typescript
import { jmsJavaDownloadsJavaDownloadReport } from 'rhizo-co-terraform-provider-oci'

const jmsJavaDownloadsJavaDownloadReportCreatedBy: jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedBy = { ... }
```


### JmsJavaDownloadsJavaDownloadReportTimeouts <a name="JmsJavaDownloadsJavaDownloadReportTimeouts" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeouts.Initializer"></a>

```typescript
import { jmsJavaDownloadsJavaDownloadReport } from 'rhizo-co-terraform-provider-oci'

const jmsJavaDownloadsJavaDownloadReportTimeouts: jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_report#create JmsJavaDownloadsJavaDownloadReport#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_report#delete JmsJavaDownloadsJavaDownloadReport#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_report#update JmsJavaDownloadsJavaDownloadReport#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_report#create JmsJavaDownloadsJavaDownloadReport#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_report#delete JmsJavaDownloadsJavaDownloadReport#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_report#update JmsJavaDownloadsJavaDownloadReport#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### JmsJavaDownloadsJavaDownloadReportCreatedByList <a name="JmsJavaDownloadsJavaDownloadReportCreatedByList" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByList.Initializer"></a>

```typescript
import { jmsJavaDownloadsJavaDownloadReport } from 'rhizo-co-terraform-provider-oci'

new jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByList.get"></a>

```typescript
public get(index: number): JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference <a name="JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference.Initializer"></a>

```typescript
import { jmsJavaDownloadsJavaDownloadReport } from 'rhizo-co-terraform-provider-oci'

new jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedBy">JmsJavaDownloadsJavaDownloadReportCreatedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: JmsJavaDownloadsJavaDownloadReportCreatedBy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedBy">JmsJavaDownloadsJavaDownloadReportCreatedBy</a>

---


### JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference <a name="JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.Initializer"></a>

```typescript
import { jmsJavaDownloadsJavaDownloadReport } from 'rhizo-co-terraform-provider-oci'

new jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeouts">JmsJavaDownloadsJavaDownloadReportTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | JmsJavaDownloadsJavaDownloadReportTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeouts">JmsJavaDownloadsJavaDownloadReportTimeouts</a>

---



