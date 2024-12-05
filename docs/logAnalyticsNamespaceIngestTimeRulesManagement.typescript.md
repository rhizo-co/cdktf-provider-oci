# `logAnalyticsNamespaceIngestTimeRulesManagement` Submodule <a name="`logAnalyticsNamespaceIngestTimeRulesManagement` Submodule" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogAnalyticsNamespaceIngestTimeRulesManagement <a name="LogAnalyticsNamespaceIngestTimeRulesManagement" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_namespace_ingest_time_rules_management oci_log_analytics_namespace_ingest_time_rules_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.Initializer"></a>

```typescript
import { logAnalyticsNamespaceIngestTimeRulesManagement } from 'rhizo-co-terraform-provider-oci'

new logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement(scope: Construct, id: string, config: LogAnalyticsNamespaceIngestTimeRulesManagementConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagementConfig">LogAnalyticsNamespaceIngestTimeRulesManagementConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagementConfig">LogAnalyticsNamespaceIngestTimeRulesManagementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.putTimeouts"></a>

```typescript
public putTimeouts(value: LogAnalyticsNamespaceIngestTimeRulesManagementTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagementTimeouts">LogAnalyticsNamespaceIngestTimeRulesManagementTimeouts</a>

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a LogAnalyticsNamespaceIngestTimeRulesManagement resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.isConstruct"></a>

```typescript
import { logAnalyticsNamespaceIngestTimeRulesManagement } from 'rhizo-co-terraform-provider-oci'

logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.isTerraformElement"></a>

```typescript
import { logAnalyticsNamespaceIngestTimeRulesManagement } from 'rhizo-co-terraform-provider-oci'

logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.isTerraformResource"></a>

```typescript
import { logAnalyticsNamespaceIngestTimeRulesManagement } from 'rhizo-co-terraform-provider-oci'

logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.generateConfigForImport"></a>

```typescript
import { logAnalyticsNamespaceIngestTimeRulesManagement } from 'rhizo-co-terraform-provider-oci'

logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a LogAnalyticsNamespaceIngestTimeRulesManagement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LogAnalyticsNamespaceIngestTimeRulesManagement to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LogAnalyticsNamespaceIngestTimeRulesManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_namespace_ingest_time_rules_management#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LogAnalyticsNamespaceIngestTimeRulesManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagementTimeoutsOutputReference">LogAnalyticsNamespaceIngestTimeRulesManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.property.enableIngestTimeRuleInput">enableIngestTimeRuleInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.property.ingestTimeRuleIdInput">ingestTimeRuleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagementTimeouts">LogAnalyticsNamespaceIngestTimeRulesManagementTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.property.enableIngestTimeRule">enableIngestTimeRule</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.property.ingestTimeRuleId">ingestTimeRuleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.property.timeouts"></a>

```typescript
public readonly timeouts: LogAnalyticsNamespaceIngestTimeRulesManagementTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagementTimeoutsOutputReference">LogAnalyticsNamespaceIngestTimeRulesManagementTimeoutsOutputReference</a>

---

##### `enableIngestTimeRuleInput`<sup>Optional</sup> <a name="enableIngestTimeRuleInput" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.property.enableIngestTimeRuleInput"></a>

```typescript
public readonly enableIngestTimeRuleInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ingestTimeRuleIdInput`<sup>Optional</sup> <a name="ingestTimeRuleIdInput" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.property.ingestTimeRuleIdInput"></a>

```typescript
public readonly ingestTimeRuleIdInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | LogAnalyticsNamespaceIngestTimeRulesManagementTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagementTimeouts">LogAnalyticsNamespaceIngestTimeRulesManagementTimeouts</a>

---

##### `enableIngestTimeRule`<sup>Required</sup> <a name="enableIngestTimeRule" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.property.enableIngestTimeRule"></a>

```typescript
public readonly enableIngestTimeRule: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ingestTimeRuleId`<sup>Required</sup> <a name="ingestTimeRuleId" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.property.ingestTimeRuleId"></a>

```typescript
public readonly ingestTimeRuleId: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagement.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LogAnalyticsNamespaceIngestTimeRulesManagementConfig <a name="LogAnalyticsNamespaceIngestTimeRulesManagementConfig" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagementConfig.Initializer"></a>

```typescript
import { logAnalyticsNamespaceIngestTimeRulesManagement } from 'rhizo-co-terraform-provider-oci'

const logAnalyticsNamespaceIngestTimeRulesManagementConfig: logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagementConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagementConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagementConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagementConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagementConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagementConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagementConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagementConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagementConfig.property.enableIngestTimeRule">enableIngestTimeRule</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_namespace_ingest_time_rules_management#enable_ingest_time_rule LogAnalyticsNamespaceIngestTimeRulesManagement#enable_ingest_time_rule}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagementConfig.property.ingestTimeRuleId">ingestTimeRuleId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_namespace_ingest_time_rules_management#ingest_time_rule_id LogAnalyticsNamespaceIngestTimeRulesManagement#ingest_time_rule_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagementConfig.property.namespace">namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_namespace_ingest_time_rules_management#namespace LogAnalyticsNamespaceIngestTimeRulesManagement#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagementConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_namespace_ingest_time_rules_management#id LogAnalyticsNamespaceIngestTimeRulesManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagementConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagementTimeouts">LogAnalyticsNamespaceIngestTimeRulesManagementTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagementConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagementConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagementConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagementConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagementConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagementConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagementConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `enableIngestTimeRule`<sup>Required</sup> <a name="enableIngestTimeRule" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagementConfig.property.enableIngestTimeRule"></a>

```typescript
public readonly enableIngestTimeRule: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_namespace_ingest_time_rules_management#enable_ingest_time_rule LogAnalyticsNamespaceIngestTimeRulesManagement#enable_ingest_time_rule}.

---

##### `ingestTimeRuleId`<sup>Required</sup> <a name="ingestTimeRuleId" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagementConfig.property.ingestTimeRuleId"></a>

```typescript
public readonly ingestTimeRuleId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_namespace_ingest_time_rules_management#ingest_time_rule_id LogAnalyticsNamespaceIngestTimeRulesManagement#ingest_time_rule_id}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagementConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_namespace_ingest_time_rules_management#namespace LogAnalyticsNamespaceIngestTimeRulesManagement#namespace}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagementConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_namespace_ingest_time_rules_management#id LogAnalyticsNamespaceIngestTimeRulesManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagementConfig.property.timeouts"></a>

```typescript
public readonly timeouts: LogAnalyticsNamespaceIngestTimeRulesManagementTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagementTimeouts">LogAnalyticsNamespaceIngestTimeRulesManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_namespace_ingest_time_rules_management#timeouts LogAnalyticsNamespaceIngestTimeRulesManagement#timeouts}

---

### LogAnalyticsNamespaceIngestTimeRulesManagementTimeouts <a name="LogAnalyticsNamespaceIngestTimeRulesManagementTimeouts" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagementTimeouts.Initializer"></a>

```typescript
import { logAnalyticsNamespaceIngestTimeRulesManagement } from 'rhizo-co-terraform-provider-oci'

const logAnalyticsNamespaceIngestTimeRulesManagementTimeouts: logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagementTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagementTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_namespace_ingest_time_rules_management#create LogAnalyticsNamespaceIngestTimeRulesManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagementTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_namespace_ingest_time_rules_management#delete LogAnalyticsNamespaceIngestTimeRulesManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagementTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_namespace_ingest_time_rules_management#update LogAnalyticsNamespaceIngestTimeRulesManagement#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagementTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_namespace_ingest_time_rules_management#create LogAnalyticsNamespaceIngestTimeRulesManagement#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagementTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_namespace_ingest_time_rules_management#delete LogAnalyticsNamespaceIngestTimeRulesManagement#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagementTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_namespace_ingest_time_rules_management#update LogAnalyticsNamespaceIngestTimeRulesManagement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LogAnalyticsNamespaceIngestTimeRulesManagementTimeoutsOutputReference <a name="LogAnalyticsNamespaceIngestTimeRulesManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagementTimeoutsOutputReference.Initializer"></a>

```typescript
import { logAnalyticsNamespaceIngestTimeRulesManagement } from 'rhizo-co-terraform-provider-oci'

new logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagementTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagementTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagementTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagementTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagementTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagementTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagementTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagementTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagementTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagementTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagementTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagementTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagementTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagementTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagementTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagementTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagementTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagementTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagementTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagementTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagementTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagementTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagementTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagementTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagementTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagementTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagementTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagementTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagementTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagementTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagementTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagementTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagementTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagementTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagementTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagementTimeouts">LogAnalyticsNamespaceIngestTimeRulesManagementTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagementTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagementTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagementTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagementTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagementTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagementTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagementTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagementTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagementTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LogAnalyticsNamespaceIngestTimeRulesManagementTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.logAnalyticsNamespaceIngestTimeRulesManagement.LogAnalyticsNamespaceIngestTimeRulesManagementTimeouts">LogAnalyticsNamespaceIngestTimeRulesManagementTimeouts</a>

---



