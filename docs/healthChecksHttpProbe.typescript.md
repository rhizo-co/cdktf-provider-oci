# `healthChecksHttpProbe` Submodule <a name="`healthChecksHttpProbe` Submodule" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HealthChecksHttpProbe <a name="HealthChecksHttpProbe" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_probe oci_health_checks_http_probe}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.Initializer"></a>

```typescript
import { healthChecksHttpProbe } from 'rhizo-co-terraform-provider-oci'

new healthChecksHttpProbe.HealthChecksHttpProbe(scope: Construct, id: string, config: HealthChecksHttpProbeConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeConfig">HealthChecksHttpProbeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeConfig">HealthChecksHttpProbeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.resetHeaders">resetHeaders</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.resetMethod">resetMethod</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.resetTimeoutInSeconds">resetTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.resetVantagePointNames">resetVantagePointNames</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.putTimeouts"></a>

```typescript
public putTimeouts(value: HealthChecksHttpProbeTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeouts">HealthChecksHttpProbeTimeouts</a>

---

##### `resetHeaders` <a name="resetHeaders" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.resetHeaders"></a>

```typescript
public resetHeaders(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMethod` <a name="resetMethod" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.resetMethod"></a>

```typescript
public resetMethod(): void
```

##### `resetPath` <a name="resetPath" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.resetPath"></a>

```typescript
public resetPath(): void
```

##### `resetPort` <a name="resetPort" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetTimeoutInSeconds` <a name="resetTimeoutInSeconds" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.resetTimeoutInSeconds"></a>

```typescript
public resetTimeoutInSeconds(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetVantagePointNames` <a name="resetVantagePointNames" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.resetVantagePointNames"></a>

```typescript
public resetVantagePointNames(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a HealthChecksHttpProbe resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.isConstruct"></a>

```typescript
import { healthChecksHttpProbe } from 'rhizo-co-terraform-provider-oci'

healthChecksHttpProbe.HealthChecksHttpProbe.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.isTerraformElement"></a>

```typescript
import { healthChecksHttpProbe } from 'rhizo-co-terraform-provider-oci'

healthChecksHttpProbe.HealthChecksHttpProbe.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.isTerraformResource"></a>

```typescript
import { healthChecksHttpProbe } from 'rhizo-co-terraform-provider-oci'

healthChecksHttpProbe.HealthChecksHttpProbe.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.generateConfigForImport"></a>

```typescript
import { healthChecksHttpProbe } from 'rhizo-co-terraform-provider-oci'

healthChecksHttpProbe.HealthChecksHttpProbe.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a HealthChecksHttpProbe resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the HealthChecksHttpProbe to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing HealthChecksHttpProbe that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_probe#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the HealthChecksHttpProbe to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.homeRegion">homeRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.resultsUrl">resultsUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference">HealthChecksHttpProbeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.headersInput">headersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.methodInput">methodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.targetsInput">targetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.timeoutInSecondsInput">timeoutInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeouts">HealthChecksHttpProbeTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.vantagePointNamesInput">vantagePointNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.headers">headers</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.method">method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.targets">targets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.timeoutInSeconds">timeoutInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.vantagePointNames">vantagePointNames</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `homeRegion`<sup>Required</sup> <a name="homeRegion" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.homeRegion"></a>

```typescript
public readonly homeRegion: string;
```

- *Type:* string

---

##### `resultsUrl`<sup>Required</sup> <a name="resultsUrl" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.resultsUrl"></a>

```typescript
public readonly resultsUrl: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.timeouts"></a>

```typescript
public readonly timeouts: HealthChecksHttpProbeTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference">HealthChecksHttpProbeTimeoutsOutputReference</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `headersInput`<sup>Optional</sup> <a name="headersInput" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.headersInput"></a>

```typescript
public readonly headersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `methodInput`<sup>Optional</sup> <a name="methodInput" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.methodInput"></a>

```typescript
public readonly methodInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `targetsInput`<sup>Optional</sup> <a name="targetsInput" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.targetsInput"></a>

```typescript
public readonly targetsInput: string[];
```

- *Type:* string[]

---

##### `timeoutInSecondsInput`<sup>Optional</sup> <a name="timeoutInSecondsInput" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.timeoutInSecondsInput"></a>

```typescript
public readonly timeoutInSecondsInput: number;
```

- *Type:* number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | HealthChecksHttpProbeTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeouts">HealthChecksHttpProbeTimeouts</a>

---

##### `vantagePointNamesInput`<sup>Optional</sup> <a name="vantagePointNamesInput" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.vantagePointNamesInput"></a>

```typescript
public readonly vantagePointNamesInput: string[];
```

- *Type:* string[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `headers`<sup>Required</sup> <a name="headers" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.headers"></a>

```typescript
public readonly headers: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `method`<sup>Required</sup> <a name="method" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `targets`<sup>Required</sup> <a name="targets" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.targets"></a>

```typescript
public readonly targets: string[];
```

- *Type:* string[]

---

##### `timeoutInSeconds`<sup>Required</sup> <a name="timeoutInSeconds" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.timeoutInSeconds"></a>

```typescript
public readonly timeoutInSeconds: number;
```

- *Type:* number

---

##### `vantagePointNames`<sup>Required</sup> <a name="vantagePointNames" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.vantagePointNames"></a>

```typescript
public readonly vantagePointNames: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbe.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### HealthChecksHttpProbeConfig <a name="HealthChecksHttpProbeConfig" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeConfig.Initializer"></a>

```typescript
import { healthChecksHttpProbe } from 'rhizo-co-terraform-provider-oci'

const healthChecksHttpProbeConfig: healthChecksHttpProbe.HealthChecksHttpProbeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_probe#compartment_id HealthChecksHttpProbe#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeConfig.property.protocol">protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_probe#protocol HealthChecksHttpProbe#protocol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeConfig.property.targets">targets</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_probe#targets HealthChecksHttpProbe#targets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeConfig.property.headers">headers</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_probe#headers HealthChecksHttpProbe#headers}. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_probe#id HealthChecksHttpProbe#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeConfig.property.method">method</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_probe#method HealthChecksHttpProbe#method}. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeConfig.property.path">path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_probe#path HealthChecksHttpProbe#path}. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeConfig.property.port">port</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_probe#port HealthChecksHttpProbe#port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeConfig.property.timeoutInSeconds">timeoutInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_probe#timeout_in_seconds HealthChecksHttpProbe#timeout_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeouts">HealthChecksHttpProbeTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeConfig.property.vantagePointNames">vantagePointNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_probe#vantage_point_names HealthChecksHttpProbe#vantage_point_names}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_probe#compartment_id HealthChecksHttpProbe#compartment_id}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeConfig.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_probe#protocol HealthChecksHttpProbe#protocol}.

---

##### `targets`<sup>Required</sup> <a name="targets" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeConfig.property.targets"></a>

```typescript
public readonly targets: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_probe#targets HealthChecksHttpProbe#targets}.

---

##### `headers`<sup>Optional</sup> <a name="headers" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeConfig.property.headers"></a>

```typescript
public readonly headers: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_probe#headers HealthChecksHttpProbe#headers}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_probe#id HealthChecksHttpProbe#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `method`<sup>Optional</sup> <a name="method" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeConfig.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_probe#method HealthChecksHttpProbe#method}.

---

##### `path`<sup>Optional</sup> <a name="path" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeConfig.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_probe#path HealthChecksHttpProbe#path}.

---

##### `port`<sup>Optional</sup> <a name="port" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeConfig.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_probe#port HealthChecksHttpProbe#port}.

---

##### `timeoutInSeconds`<sup>Optional</sup> <a name="timeoutInSeconds" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeConfig.property.timeoutInSeconds"></a>

```typescript
public readonly timeoutInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_probe#timeout_in_seconds HealthChecksHttpProbe#timeout_in_seconds}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeConfig.property.timeouts"></a>

```typescript
public readonly timeouts: HealthChecksHttpProbeTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeouts">HealthChecksHttpProbeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_probe#timeouts HealthChecksHttpProbe#timeouts}

---

##### `vantagePointNames`<sup>Optional</sup> <a name="vantagePointNames" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeConfig.property.vantagePointNames"></a>

```typescript
public readonly vantagePointNames: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_probe#vantage_point_names HealthChecksHttpProbe#vantage_point_names}.

---

### HealthChecksHttpProbeTimeouts <a name="HealthChecksHttpProbeTimeouts" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeouts.Initializer"></a>

```typescript
import { healthChecksHttpProbe } from 'rhizo-co-terraform-provider-oci'

const healthChecksHttpProbeTimeouts: healthChecksHttpProbe.HealthChecksHttpProbeTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_probe#create HealthChecksHttpProbe#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_probe#delete HealthChecksHttpProbe#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_probe#update HealthChecksHttpProbe#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_probe#create HealthChecksHttpProbe#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_probe#delete HealthChecksHttpProbe#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/health_checks_http_probe#update HealthChecksHttpProbe#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### HealthChecksHttpProbeTimeoutsOutputReference <a name="HealthChecksHttpProbeTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.Initializer"></a>

```typescript
import { healthChecksHttpProbe } from 'rhizo-co-terraform-provider-oci'

new healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeouts">HealthChecksHttpProbeTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | HealthChecksHttpProbeTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.healthChecksHttpProbe.HealthChecksHttpProbeTimeouts">HealthChecksHttpProbeTimeouts</a>

---



