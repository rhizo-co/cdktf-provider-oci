# `dataOciLimitsResourceAvailability` Submodule <a name="`dataOciLimitsResourceAvailability` Submodule" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciLimitsResourceAvailability <a name="DataOciLimitsResourceAvailability" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/limits_resource_availability oci_limits_resource_availability}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.Initializer"></a>

```typescript
import { dataOciLimitsResourceAvailability } from 'rhizo-co-terraform-provider-oci'

new dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability(scope: Construct, id: string, config: DataOciLimitsResourceAvailabilityConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailabilityConfig">DataOciLimitsResourceAvailabilityConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailabilityConfig">DataOciLimitsResourceAvailabilityConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.resetAvailabilityDomain">resetAvailabilityDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.resetSubscriptionId">resetSubscriptionId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAvailabilityDomain` <a name="resetAvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.resetAvailabilityDomain"></a>

```typescript
public resetAvailabilityDomain(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.resetId"></a>

```typescript
public resetId(): void
```

##### `resetSubscriptionId` <a name="resetSubscriptionId" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.resetSubscriptionId"></a>

```typescript
public resetSubscriptionId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciLimitsResourceAvailability resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.isConstruct"></a>

```typescript
import { dataOciLimitsResourceAvailability } from 'rhizo-co-terraform-provider-oci'

dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.isTerraformElement"></a>

```typescript
import { dataOciLimitsResourceAvailability } from 'rhizo-co-terraform-provider-oci'

dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.isTerraformDataSource"></a>

```typescript
import { dataOciLimitsResourceAvailability } from 'rhizo-co-terraform-provider-oci'

dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.generateConfigForImport"></a>

```typescript
import { dataOciLimitsResourceAvailability } from 'rhizo-co-terraform-provider-oci'

dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciLimitsResourceAvailability resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciLimitsResourceAvailability to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciLimitsResourceAvailability that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/limits_resource_availability#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciLimitsResourceAvailability to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.property.available">available</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.property.effectiveQuotaValue">effectiveQuotaValue</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.property.fractionalAvailability">fractionalAvailability</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.property.fractionalUsage">fractionalUsage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.property.used">used</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.property.availabilityDomainInput">availabilityDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.property.limitNameInput">limitNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.property.serviceNameInput">serviceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.property.subscriptionIdInput">subscriptionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.property.limitName">limitName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.property.serviceName">serviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.property.subscriptionId">subscriptionId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `available`<sup>Required</sup> <a name="available" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.property.available"></a>

```typescript
public readonly available: string;
```

- *Type:* string

---

##### `effectiveQuotaValue`<sup>Required</sup> <a name="effectiveQuotaValue" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.property.effectiveQuotaValue"></a>

```typescript
public readonly effectiveQuotaValue: number;
```

- *Type:* number

---

##### `fractionalAvailability`<sup>Required</sup> <a name="fractionalAvailability" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.property.fractionalAvailability"></a>

```typescript
public readonly fractionalAvailability: number;
```

- *Type:* number

---

##### `fractionalUsage`<sup>Required</sup> <a name="fractionalUsage" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.property.fractionalUsage"></a>

```typescript
public readonly fractionalUsage: number;
```

- *Type:* number

---

##### `used`<sup>Required</sup> <a name="used" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.property.used"></a>

```typescript
public readonly used: string;
```

- *Type:* string

---

##### `availabilityDomainInput`<sup>Optional</sup> <a name="availabilityDomainInput" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.property.availabilityDomainInput"></a>

```typescript
public readonly availabilityDomainInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `limitNameInput`<sup>Optional</sup> <a name="limitNameInput" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.property.limitNameInput"></a>

```typescript
public readonly limitNameInput: string;
```

- *Type:* string

---

##### `serviceNameInput`<sup>Optional</sup> <a name="serviceNameInput" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.property.serviceNameInput"></a>

```typescript
public readonly serviceNameInput: string;
```

- *Type:* string

---

##### `subscriptionIdInput`<sup>Optional</sup> <a name="subscriptionIdInput" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.property.subscriptionIdInput"></a>

```typescript
public readonly subscriptionIdInput: string;
```

- *Type:* string

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `limitName`<sup>Required</sup> <a name="limitName" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.property.limitName"></a>

```typescript
public readonly limitName: string;
```

- *Type:* string

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.property.subscriptionId"></a>

```typescript
public readonly subscriptionId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailability.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciLimitsResourceAvailabilityConfig <a name="DataOciLimitsResourceAvailabilityConfig" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailabilityConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailabilityConfig.Initializer"></a>

```typescript
import { dataOciLimitsResourceAvailability } from 'rhizo-co-terraform-provider-oci'

const dataOciLimitsResourceAvailabilityConfig: dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailabilityConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailabilityConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailabilityConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailabilityConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailabilityConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailabilityConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailabilityConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailabilityConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailabilityConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/limits_resource_availability#compartment_id DataOciLimitsResourceAvailability#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailabilityConfig.property.limitName">limitName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/limits_resource_availability#limit_name DataOciLimitsResourceAvailability#limit_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailabilityConfig.property.serviceName">serviceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/limits_resource_availability#service_name DataOciLimitsResourceAvailability#service_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailabilityConfig.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/limits_resource_availability#availability_domain DataOciLimitsResourceAvailability#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailabilityConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/limits_resource_availability#id DataOciLimitsResourceAvailability#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailabilityConfig.property.subscriptionId">subscriptionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/limits_resource_availability#subscription_id DataOciLimitsResourceAvailability#subscription_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailabilityConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailabilityConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailabilityConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailabilityConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailabilityConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailabilityConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailabilityConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailabilityConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/limits_resource_availability#compartment_id DataOciLimitsResourceAvailability#compartment_id}.

---

##### `limitName`<sup>Required</sup> <a name="limitName" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailabilityConfig.property.limitName"></a>

```typescript
public readonly limitName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/limits_resource_availability#limit_name DataOciLimitsResourceAvailability#limit_name}.

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailabilityConfig.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/limits_resource_availability#service_name DataOciLimitsResourceAvailability#service_name}.

---

##### `availabilityDomain`<sup>Optional</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailabilityConfig.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/limits_resource_availability#availability_domain DataOciLimitsResourceAvailability#availability_domain}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailabilityConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/limits_resource_availability#id DataOciLimitsResourceAvailability#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `subscriptionId`<sup>Optional</sup> <a name="subscriptionId" id="rhizo-co-terraform-provider-oci.dataOciLimitsResourceAvailability.DataOciLimitsResourceAvailabilityConfig.property.subscriptionId"></a>

```typescript
public readonly subscriptionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/limits_resource_availability#subscription_id DataOciLimitsResourceAvailability#subscription_id}.

---



