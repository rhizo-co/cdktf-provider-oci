# `logAnalyticsLogAnalyticsImportCustomContent` Submodule <a name="`logAnalyticsLogAnalyticsImportCustomContent` Submodule" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogAnalyticsLogAnalyticsImportCustomContent <a name="LogAnalyticsLogAnalyticsImportCustomContent" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_import_custom_content oci_log_analytics_log_analytics_import_custom_content}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.Initializer"></a>

```typescript
import { logAnalyticsLogAnalyticsImportCustomContent } from 'rhizo-co-terraform-provider-oci'

new logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent(scope: Construct, id: string, config: LogAnalyticsLogAnalyticsImportCustomContentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentConfig">LogAnalyticsLogAnalyticsImportCustomContentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentConfig">LogAnalyticsLogAnalyticsImportCustomContentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.resetExpect">resetExpect</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.resetIsOverwrite">resetIsOverwrite</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.putTimeouts"></a>

```typescript
public putTimeouts(value: LogAnalyticsLogAnalyticsImportCustomContentTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeouts">LogAnalyticsLogAnalyticsImportCustomContentTimeouts</a>

---

##### `resetExpect` <a name="resetExpect" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.resetExpect"></a>

```typescript
public resetExpect(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsOverwrite` <a name="resetIsOverwrite" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.resetIsOverwrite"></a>

```typescript
public resetIsOverwrite(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a LogAnalyticsLogAnalyticsImportCustomContent resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.isConstruct"></a>

```typescript
import { logAnalyticsLogAnalyticsImportCustomContent } from 'rhizo-co-terraform-provider-oci'

logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.isTerraformElement"></a>

```typescript
import { logAnalyticsLogAnalyticsImportCustomContent } from 'rhizo-co-terraform-provider-oci'

logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.isTerraformResource"></a>

```typescript
import { logAnalyticsLogAnalyticsImportCustomContent } from 'rhizo-co-terraform-provider-oci'

logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.generateConfigForImport"></a>

```typescript
import { logAnalyticsLogAnalyticsImportCustomContent } from 'rhizo-co-terraform-provider-oci'

logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a LogAnalyticsLogAnalyticsImportCustomContent resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LogAnalyticsLogAnalyticsImportCustomContent to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LogAnalyticsLogAnalyticsImportCustomContent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_import_custom_content#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LogAnalyticsLogAnalyticsImportCustomContent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.changeList">changeList</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructList">LogAnalyticsLogAnalyticsImportCustomContentChangeListStructList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.contentName">contentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.fieldNames">fieldNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.parserNames">parserNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.sourceNames">sourceNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference">LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.expectInput">expectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.importCustomContentFileInput">importCustomContentFileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.isOverwriteInput">isOverwriteInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeouts">LogAnalyticsLogAnalyticsImportCustomContentTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.expect">expect</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.importCustomContentFile">importCustomContentFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.isOverwrite">isOverwrite</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `changeList`<sup>Required</sup> <a name="changeList" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.changeList"></a>

```typescript
public readonly changeList: LogAnalyticsLogAnalyticsImportCustomContentChangeListStructList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructList">LogAnalyticsLogAnalyticsImportCustomContentChangeListStructList</a>

---

##### `contentName`<sup>Required</sup> <a name="contentName" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.contentName"></a>

```typescript
public readonly contentName: string;
```

- *Type:* string

---

##### `fieldNames`<sup>Required</sup> <a name="fieldNames" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.fieldNames"></a>

```typescript
public readonly fieldNames: string[];
```

- *Type:* string[]

---

##### `parserNames`<sup>Required</sup> <a name="parserNames" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.parserNames"></a>

```typescript
public readonly parserNames: string[];
```

- *Type:* string[]

---

##### `sourceNames`<sup>Required</sup> <a name="sourceNames" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.sourceNames"></a>

```typescript
public readonly sourceNames: string[];
```

- *Type:* string[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.timeouts"></a>

```typescript
public readonly timeouts: LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference">LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference</a>

---

##### `expectInput`<sup>Optional</sup> <a name="expectInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.expectInput"></a>

```typescript
public readonly expectInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `importCustomContentFileInput`<sup>Optional</sup> <a name="importCustomContentFileInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.importCustomContentFileInput"></a>

```typescript
public readonly importCustomContentFileInput: string;
```

- *Type:* string

---

##### `isOverwriteInput`<sup>Optional</sup> <a name="isOverwriteInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.isOverwriteInput"></a>

```typescript
public readonly isOverwriteInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | LogAnalyticsLogAnalyticsImportCustomContentTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeouts">LogAnalyticsLogAnalyticsImportCustomContentTimeouts</a>

---

##### `expect`<sup>Required</sup> <a name="expect" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.expect"></a>

```typescript
public readonly expect: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `importCustomContentFile`<sup>Required</sup> <a name="importCustomContentFile" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.importCustomContentFile"></a>

```typescript
public readonly importCustomContentFile: string;
```

- *Type:* string

---

##### `isOverwrite`<sup>Required</sup> <a name="isOverwrite" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.isOverwrite"></a>

```typescript
public readonly isOverwrite: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LogAnalyticsLogAnalyticsImportCustomContentChangeListStruct <a name="LogAnalyticsLogAnalyticsImportCustomContentChangeListStruct" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStruct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStruct.Initializer"></a>

```typescript
import { logAnalyticsLogAnalyticsImportCustomContent } from 'rhizo-co-terraform-provider-oci'

const logAnalyticsLogAnalyticsImportCustomContentChangeListStruct: logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStruct = { ... }
```


### LogAnalyticsLogAnalyticsImportCustomContentConfig <a name="LogAnalyticsLogAnalyticsImportCustomContentConfig" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentConfig.Initializer"></a>

```typescript
import { logAnalyticsLogAnalyticsImportCustomContent } from 'rhizo-co-terraform-provider-oci'

const logAnalyticsLogAnalyticsImportCustomContentConfig: logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentConfig.property.importCustomContentFile">importCustomContentFile</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_import_custom_content#import_custom_content_file LogAnalyticsLogAnalyticsImportCustomContent#import_custom_content_file}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentConfig.property.namespace">namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_import_custom_content#namespace LogAnalyticsLogAnalyticsImportCustomContent#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentConfig.property.expect">expect</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_import_custom_content#expect LogAnalyticsLogAnalyticsImportCustomContent#expect}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_import_custom_content#id LogAnalyticsLogAnalyticsImportCustomContent#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentConfig.property.isOverwrite">isOverwrite</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_import_custom_content#is_overwrite LogAnalyticsLogAnalyticsImportCustomContent#is_overwrite}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeouts">LogAnalyticsLogAnalyticsImportCustomContentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `importCustomContentFile`<sup>Required</sup> <a name="importCustomContentFile" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentConfig.property.importCustomContentFile"></a>

```typescript
public readonly importCustomContentFile: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_import_custom_content#import_custom_content_file LogAnalyticsLogAnalyticsImportCustomContent#import_custom_content_file}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_import_custom_content#namespace LogAnalyticsLogAnalyticsImportCustomContent#namespace}.

---

##### `expect`<sup>Optional</sup> <a name="expect" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentConfig.property.expect"></a>

```typescript
public readonly expect: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_import_custom_content#expect LogAnalyticsLogAnalyticsImportCustomContent#expect}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_import_custom_content#id LogAnalyticsLogAnalyticsImportCustomContent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isOverwrite`<sup>Optional</sup> <a name="isOverwrite" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentConfig.property.isOverwrite"></a>

```typescript
public readonly isOverwrite: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_import_custom_content#is_overwrite LogAnalyticsLogAnalyticsImportCustomContent#is_overwrite}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentConfig.property.timeouts"></a>

```typescript
public readonly timeouts: LogAnalyticsLogAnalyticsImportCustomContentTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeouts">LogAnalyticsLogAnalyticsImportCustomContentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_import_custom_content#timeouts LogAnalyticsLogAnalyticsImportCustomContent#timeouts}

---

### LogAnalyticsLogAnalyticsImportCustomContentTimeouts <a name="LogAnalyticsLogAnalyticsImportCustomContentTimeouts" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeouts.Initializer"></a>

```typescript
import { logAnalyticsLogAnalyticsImportCustomContent } from 'rhizo-co-terraform-provider-oci'

const logAnalyticsLogAnalyticsImportCustomContentTimeouts: logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_import_custom_content#create LogAnalyticsLogAnalyticsImportCustomContent#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_import_custom_content#delete LogAnalyticsLogAnalyticsImportCustomContent#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_import_custom_content#update LogAnalyticsLogAnalyticsImportCustomContent#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_import_custom_content#create LogAnalyticsLogAnalyticsImportCustomContent#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_import_custom_content#delete LogAnalyticsLogAnalyticsImportCustomContent#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_import_custom_content#update LogAnalyticsLogAnalyticsImportCustomContent#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LogAnalyticsLogAnalyticsImportCustomContentChangeListStructList <a name="LogAnalyticsLogAnalyticsImportCustomContentChangeListStructList" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructList.Initializer"></a>

```typescript
import { logAnalyticsLogAnalyticsImportCustomContent } from 'rhizo-co-terraform-provider-oci'

new logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructList.get"></a>

```typescript
public get(index: number): LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference <a name="LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.Initializer"></a>

```typescript
import { logAnalyticsLogAnalyticsImportCustomContent } from 'rhizo-co-terraform-provider-oci'

new logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.property.conflictFieldDisplayNames">conflictFieldDisplayNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.property.conflictParserNames">conflictParserNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.property.conflictSourceNames">conflictSourceNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.property.createdFieldDisplayNames">createdFieldDisplayNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.property.createdParserNames">createdParserNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.property.createdSourceNames">createdSourceNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.property.updatedFieldDisplayNames">updatedFieldDisplayNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.property.updatedParserNames">updatedParserNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.property.updatedSourceNames">updatedSourceNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStruct">LogAnalyticsLogAnalyticsImportCustomContentChangeListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `conflictFieldDisplayNames`<sup>Required</sup> <a name="conflictFieldDisplayNames" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.property.conflictFieldDisplayNames"></a>

```typescript
public readonly conflictFieldDisplayNames: string[];
```

- *Type:* string[]

---

##### `conflictParserNames`<sup>Required</sup> <a name="conflictParserNames" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.property.conflictParserNames"></a>

```typescript
public readonly conflictParserNames: string[];
```

- *Type:* string[]

---

##### `conflictSourceNames`<sup>Required</sup> <a name="conflictSourceNames" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.property.conflictSourceNames"></a>

```typescript
public readonly conflictSourceNames: string[];
```

- *Type:* string[]

---

##### `createdFieldDisplayNames`<sup>Required</sup> <a name="createdFieldDisplayNames" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.property.createdFieldDisplayNames"></a>

```typescript
public readonly createdFieldDisplayNames: string[];
```

- *Type:* string[]

---

##### `createdParserNames`<sup>Required</sup> <a name="createdParserNames" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.property.createdParserNames"></a>

```typescript
public readonly createdParserNames: string[];
```

- *Type:* string[]

---

##### `createdSourceNames`<sup>Required</sup> <a name="createdSourceNames" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.property.createdSourceNames"></a>

```typescript
public readonly createdSourceNames: string[];
```

- *Type:* string[]

---

##### `updatedFieldDisplayNames`<sup>Required</sup> <a name="updatedFieldDisplayNames" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.property.updatedFieldDisplayNames"></a>

```typescript
public readonly updatedFieldDisplayNames: string[];
```

- *Type:* string[]

---

##### `updatedParserNames`<sup>Required</sup> <a name="updatedParserNames" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.property.updatedParserNames"></a>

```typescript
public readonly updatedParserNames: string[];
```

- *Type:* string[]

---

##### `updatedSourceNames`<sup>Required</sup> <a name="updatedSourceNames" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.property.updatedSourceNames"></a>

```typescript
public readonly updatedSourceNames: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LogAnalyticsLogAnalyticsImportCustomContentChangeListStruct;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStruct">LogAnalyticsLogAnalyticsImportCustomContentChangeListStruct</a>

---


### LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference <a name="LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.Initializer"></a>

```typescript
import { logAnalyticsLogAnalyticsImportCustomContent } from 'rhizo-co-terraform-provider-oci'

new logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeouts">LogAnalyticsLogAnalyticsImportCustomContentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LogAnalyticsLogAnalyticsImportCustomContentTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeouts">LogAnalyticsLogAnalyticsImportCustomContentTimeouts</a>

---



