# `dataOciOsubSubscriptionCommitment` Submodule <a name="`dataOciOsubSubscriptionCommitment` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOsubSubscriptionCommitment <a name="DataOciOsubSubscriptionCommitment" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_commitment oci_osub_subscription_commitment}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.Initializer"></a>

```typescript
import { dataOciOsubSubscriptionCommitment } from 'rhizo-co-terraform-provider-oci'

new dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment(scope: Construct, id: string, config: DataOciOsubSubscriptionCommitmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitmentConfig">DataOciOsubSubscriptionCommitmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitmentConfig">DataOciOsubSubscriptionCommitmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.resetXOneGatewaySubscriptionId">resetXOneGatewaySubscriptionId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.resetXOneOriginRegion">resetXOneOriginRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.resetId"></a>

```typescript
public resetId(): void
```

##### `resetXOneGatewaySubscriptionId` <a name="resetXOneGatewaySubscriptionId" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.resetXOneGatewaySubscriptionId"></a>

```typescript
public resetXOneGatewaySubscriptionId(): void
```

##### `resetXOneOriginRegion` <a name="resetXOneOriginRegion" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.resetXOneOriginRegion"></a>

```typescript
public resetXOneOriginRegion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOsubSubscriptionCommitment resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.isConstruct"></a>

```typescript
import { dataOciOsubSubscriptionCommitment } from 'rhizo-co-terraform-provider-oci'

dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.isTerraformElement"></a>

```typescript
import { dataOciOsubSubscriptionCommitment } from 'rhizo-co-terraform-provider-oci'

dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.isTerraformDataSource"></a>

```typescript
import { dataOciOsubSubscriptionCommitment } from 'rhizo-co-terraform-provider-oci'

dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.generateConfigForImport"></a>

```typescript
import { dataOciOsubSubscriptionCommitment } from 'rhizo-co-terraform-provider-oci'

dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciOsubSubscriptionCommitment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciOsubSubscriptionCommitment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciOsubSubscriptionCommitment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_commitment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOsubSubscriptionCommitment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.property.availableAmount">availableAmount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.property.fundedAllocationValue">fundedAllocationValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.property.quantity">quantity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.property.timeEnd">timeEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.property.timeStart">timeStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.property.usedAmount">usedAmount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.property.commitmentIdInput">commitmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.property.xOneGatewaySubscriptionIdInput">xOneGatewaySubscriptionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.property.xOneOriginRegionInput">xOneOriginRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.property.commitmentId">commitmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.property.xOneGatewaySubscriptionId">xOneGatewaySubscriptionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.property.xOneOriginRegion">xOneOriginRegion</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `availableAmount`<sup>Required</sup> <a name="availableAmount" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.property.availableAmount"></a>

```typescript
public readonly availableAmount: string;
```

- *Type:* string

---

##### `fundedAllocationValue`<sup>Required</sup> <a name="fundedAllocationValue" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.property.fundedAllocationValue"></a>

```typescript
public readonly fundedAllocationValue: string;
```

- *Type:* string

---

##### `quantity`<sup>Required</sup> <a name="quantity" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.property.quantity"></a>

```typescript
public readonly quantity: string;
```

- *Type:* string

---

##### `timeEnd`<sup>Required</sup> <a name="timeEnd" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.property.timeEnd"></a>

```typescript
public readonly timeEnd: string;
```

- *Type:* string

---

##### `timeStart`<sup>Required</sup> <a name="timeStart" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.property.timeStart"></a>

```typescript
public readonly timeStart: string;
```

- *Type:* string

---

##### `usedAmount`<sup>Required</sup> <a name="usedAmount" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.property.usedAmount"></a>

```typescript
public readonly usedAmount: string;
```

- *Type:* string

---

##### `commitmentIdInput`<sup>Optional</sup> <a name="commitmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.property.commitmentIdInput"></a>

```typescript
public readonly commitmentIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `xOneGatewaySubscriptionIdInput`<sup>Optional</sup> <a name="xOneGatewaySubscriptionIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.property.xOneGatewaySubscriptionIdInput"></a>

```typescript
public readonly xOneGatewaySubscriptionIdInput: string;
```

- *Type:* string

---

##### `xOneOriginRegionInput`<sup>Optional</sup> <a name="xOneOriginRegionInput" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.property.xOneOriginRegionInput"></a>

```typescript
public readonly xOneOriginRegionInput: string;
```

- *Type:* string

---

##### `commitmentId`<sup>Required</sup> <a name="commitmentId" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.property.commitmentId"></a>

```typescript
public readonly commitmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `xOneGatewaySubscriptionId`<sup>Required</sup> <a name="xOneGatewaySubscriptionId" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.property.xOneGatewaySubscriptionId"></a>

```typescript
public readonly xOneGatewaySubscriptionId: string;
```

- *Type:* string

---

##### `xOneOriginRegion`<sup>Required</sup> <a name="xOneOriginRegion" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.property.xOneOriginRegion"></a>

```typescript
public readonly xOneOriginRegion: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOsubSubscriptionCommitmentConfig <a name="DataOciOsubSubscriptionCommitmentConfig" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitmentConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitmentConfig.Initializer"></a>

```typescript
import { dataOciOsubSubscriptionCommitment } from 'rhizo-co-terraform-provider-oci'

const dataOciOsubSubscriptionCommitmentConfig: dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitmentConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitmentConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitmentConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitmentConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitmentConfig.property.commitmentId">commitmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_commitment#commitment_id DataOciOsubSubscriptionCommitment#commitment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitmentConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_commitment#id DataOciOsubSubscriptionCommitment#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitmentConfig.property.xOneGatewaySubscriptionId">xOneGatewaySubscriptionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_commitment#x_one_gateway_subscription_id DataOciOsubSubscriptionCommitment#x_one_gateway_subscription_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitmentConfig.property.xOneOriginRegion">xOneOriginRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_commitment#x_one_origin_region DataOciOsubSubscriptionCommitment#x_one_origin_region}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitmentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `commitmentId`<sup>Required</sup> <a name="commitmentId" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitmentConfig.property.commitmentId"></a>

```typescript
public readonly commitmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_commitment#commitment_id DataOciOsubSubscriptionCommitment#commitment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitmentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_commitment#id DataOciOsubSubscriptionCommitment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `xOneGatewaySubscriptionId`<sup>Optional</sup> <a name="xOneGatewaySubscriptionId" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitmentConfig.property.xOneGatewaySubscriptionId"></a>

```typescript
public readonly xOneGatewaySubscriptionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_commitment#x_one_gateway_subscription_id DataOciOsubSubscriptionCommitment#x_one_gateway_subscription_id}.

---

##### `xOneOriginRegion`<sup>Optional</sup> <a name="xOneOriginRegion" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitmentConfig.property.xOneOriginRegion"></a>

```typescript
public readonly xOneOriginRegion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_commitment#x_one_origin_region DataOciOsubSubscriptionCommitment#x_one_origin_region}.

---



