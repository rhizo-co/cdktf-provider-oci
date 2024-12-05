# `dataOciOsubSubscriptionSubscriptions` Submodule <a name="`dataOciOsubSubscriptionSubscriptions` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOsubSubscriptionSubscriptions <a name="DataOciOsubSubscriptionSubscriptions" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_subscriptions oci_osub_subscription_subscriptions}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.Initializer"></a>

```typescript
import { dataOciOsubSubscriptionSubscriptions } from 'rhizo-co-terraform-provider-oci'

new dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions(scope: Construct, id: string, config: DataOciOsubSubscriptionSubscriptionsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsConfig">DataOciOsubSubscriptionSubscriptionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsConfig">DataOciOsubSubscriptionSubscriptionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.resetBuyerEmail">resetBuyerEmail</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.resetIsCommitInfoRequired">resetIsCommitInfoRequired</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.resetPlanNumber">resetPlanNumber</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.resetSubscriptionId">resetSubscriptionId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.resetXOneGatewaySubscriptionId">resetXOneGatewaySubscriptionId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.resetXOneOriginRegion">resetXOneOriginRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciOsubSubscriptionSubscriptionsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilter">DataOciOsubSubscriptionSubscriptionsFilter</a>[]

---

##### `resetBuyerEmail` <a name="resetBuyerEmail" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.resetBuyerEmail"></a>

```typescript
public resetBuyerEmail(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsCommitInfoRequired` <a name="resetIsCommitInfoRequired" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.resetIsCommitInfoRequired"></a>

```typescript
public resetIsCommitInfoRequired(): void
```

##### `resetPlanNumber` <a name="resetPlanNumber" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.resetPlanNumber"></a>

```typescript
public resetPlanNumber(): void
```

##### `resetSubscriptionId` <a name="resetSubscriptionId" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.resetSubscriptionId"></a>

```typescript
public resetSubscriptionId(): void
```

##### `resetXOneGatewaySubscriptionId` <a name="resetXOneGatewaySubscriptionId" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.resetXOneGatewaySubscriptionId"></a>

```typescript
public resetXOneGatewaySubscriptionId(): void
```

##### `resetXOneOriginRegion` <a name="resetXOneOriginRegion" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.resetXOneOriginRegion"></a>

```typescript
public resetXOneOriginRegion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOsubSubscriptionSubscriptions resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.isConstruct"></a>

```typescript
import { dataOciOsubSubscriptionSubscriptions } from 'rhizo-co-terraform-provider-oci'

dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.isTerraformElement"></a>

```typescript
import { dataOciOsubSubscriptionSubscriptions } from 'rhizo-co-terraform-provider-oci'

dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.isTerraformDataSource"></a>

```typescript
import { dataOciOsubSubscriptionSubscriptions } from 'rhizo-co-terraform-provider-oci'

dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.generateConfigForImport"></a>

```typescript
import { dataOciOsubSubscriptionSubscriptions } from 'rhizo-co-terraform-provider-oci'

dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciOsubSubscriptionSubscriptions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciOsubSubscriptionSubscriptions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciOsubSubscriptionSubscriptions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_subscriptions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOsubSubscriptionSubscriptions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterList">DataOciOsubSubscriptionSubscriptionsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.subscriptions">subscriptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsList">DataOciOsubSubscriptionSubscriptionsSubscriptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.buyerEmailInput">buyerEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilter">DataOciOsubSubscriptionSubscriptionsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.isCommitInfoRequiredInput">isCommitInfoRequiredInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.planNumberInput">planNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.subscriptionIdInput">subscriptionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.xOneGatewaySubscriptionIdInput">xOneGatewaySubscriptionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.xOneOriginRegionInput">xOneOriginRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.buyerEmail">buyerEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.isCommitInfoRequired">isCommitInfoRequired</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.planNumber">planNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.subscriptionId">subscriptionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.xOneGatewaySubscriptionId">xOneGatewaySubscriptionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.xOneOriginRegion">xOneOriginRegion</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.filter"></a>

```typescript
public readonly filter: DataOciOsubSubscriptionSubscriptionsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterList">DataOciOsubSubscriptionSubscriptionsFilterList</a>

---

##### `subscriptions`<sup>Required</sup> <a name="subscriptions" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.subscriptions"></a>

```typescript
public readonly subscriptions: DataOciOsubSubscriptionSubscriptionsSubscriptionsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsList">DataOciOsubSubscriptionSubscriptionsSubscriptionsList</a>

---

##### `buyerEmailInput`<sup>Optional</sup> <a name="buyerEmailInput" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.buyerEmailInput"></a>

```typescript
public readonly buyerEmailInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciOsubSubscriptionSubscriptionsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilter">DataOciOsubSubscriptionSubscriptionsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isCommitInfoRequiredInput`<sup>Optional</sup> <a name="isCommitInfoRequiredInput" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.isCommitInfoRequiredInput"></a>

```typescript
public readonly isCommitInfoRequiredInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `planNumberInput`<sup>Optional</sup> <a name="planNumberInput" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.planNumberInput"></a>

```typescript
public readonly planNumberInput: string;
```

- *Type:* string

---

##### `subscriptionIdInput`<sup>Optional</sup> <a name="subscriptionIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.subscriptionIdInput"></a>

```typescript
public readonly subscriptionIdInput: string;
```

- *Type:* string

---

##### `xOneGatewaySubscriptionIdInput`<sup>Optional</sup> <a name="xOneGatewaySubscriptionIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.xOneGatewaySubscriptionIdInput"></a>

```typescript
public readonly xOneGatewaySubscriptionIdInput: string;
```

- *Type:* string

---

##### `xOneOriginRegionInput`<sup>Optional</sup> <a name="xOneOriginRegionInput" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.xOneOriginRegionInput"></a>

```typescript
public readonly xOneOriginRegionInput: string;
```

- *Type:* string

---

##### `buyerEmail`<sup>Required</sup> <a name="buyerEmail" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.buyerEmail"></a>

```typescript
public readonly buyerEmail: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isCommitInfoRequired`<sup>Required</sup> <a name="isCommitInfoRequired" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.isCommitInfoRequired"></a>

```typescript
public readonly isCommitInfoRequired: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `planNumber`<sup>Required</sup> <a name="planNumber" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.planNumber"></a>

```typescript
public readonly planNumber: string;
```

- *Type:* string

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.subscriptionId"></a>

```typescript
public readonly subscriptionId: string;
```

- *Type:* string

---

##### `xOneGatewaySubscriptionId`<sup>Required</sup> <a name="xOneGatewaySubscriptionId" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.xOneGatewaySubscriptionId"></a>

```typescript
public readonly xOneGatewaySubscriptionId: string;
```

- *Type:* string

---

##### `xOneOriginRegion`<sup>Required</sup> <a name="xOneOriginRegion" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.xOneOriginRegion"></a>

```typescript
public readonly xOneOriginRegion: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOsubSubscriptionSubscriptionsConfig <a name="DataOciOsubSubscriptionSubscriptionsConfig" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsConfig.Initializer"></a>

```typescript
import { dataOciOsubSubscriptionSubscriptions } from 'rhizo-co-terraform-provider-oci'

const dataOciOsubSubscriptionSubscriptionsConfig: dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_subscriptions#compartment_id DataOciOsubSubscriptionSubscriptions#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsConfig.property.buyerEmail">buyerEmail</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_subscriptions#buyer_email DataOciOsubSubscriptionSubscriptions#buyer_email}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilter">DataOciOsubSubscriptionSubscriptionsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_subscriptions#id DataOciOsubSubscriptionSubscriptions#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsConfig.property.isCommitInfoRequired">isCommitInfoRequired</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_subscriptions#is_commit_info_required DataOciOsubSubscriptionSubscriptions#is_commit_info_required}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsConfig.property.planNumber">planNumber</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_subscriptions#plan_number DataOciOsubSubscriptionSubscriptions#plan_number}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsConfig.property.subscriptionId">subscriptionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_subscriptions#subscription_id DataOciOsubSubscriptionSubscriptions#subscription_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsConfig.property.xOneGatewaySubscriptionId">xOneGatewaySubscriptionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_subscriptions#x_one_gateway_subscription_id DataOciOsubSubscriptionSubscriptions#x_one_gateway_subscription_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsConfig.property.xOneOriginRegion">xOneOriginRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_subscriptions#x_one_origin_region DataOciOsubSubscriptionSubscriptions#x_one_origin_region}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_subscriptions#compartment_id DataOciOsubSubscriptionSubscriptions#compartment_id}.

---

##### `buyerEmail`<sup>Optional</sup> <a name="buyerEmail" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsConfig.property.buyerEmail"></a>

```typescript
public readonly buyerEmail: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_subscriptions#buyer_email DataOciOsubSubscriptionSubscriptions#buyer_email}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciOsubSubscriptionSubscriptionsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilter">DataOciOsubSubscriptionSubscriptionsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_subscriptions#filter DataOciOsubSubscriptionSubscriptions#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_subscriptions#id DataOciOsubSubscriptionSubscriptions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isCommitInfoRequired`<sup>Optional</sup> <a name="isCommitInfoRequired" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsConfig.property.isCommitInfoRequired"></a>

```typescript
public readonly isCommitInfoRequired: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_subscriptions#is_commit_info_required DataOciOsubSubscriptionSubscriptions#is_commit_info_required}.

---

##### `planNumber`<sup>Optional</sup> <a name="planNumber" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsConfig.property.planNumber"></a>

```typescript
public readonly planNumber: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_subscriptions#plan_number DataOciOsubSubscriptionSubscriptions#plan_number}.

---

##### `subscriptionId`<sup>Optional</sup> <a name="subscriptionId" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsConfig.property.subscriptionId"></a>

```typescript
public readonly subscriptionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_subscriptions#subscription_id DataOciOsubSubscriptionSubscriptions#subscription_id}.

---

##### `xOneGatewaySubscriptionId`<sup>Optional</sup> <a name="xOneGatewaySubscriptionId" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsConfig.property.xOneGatewaySubscriptionId"></a>

```typescript
public readonly xOneGatewaySubscriptionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_subscriptions#x_one_gateway_subscription_id DataOciOsubSubscriptionSubscriptions#x_one_gateway_subscription_id}.

---

##### `xOneOriginRegion`<sup>Optional</sup> <a name="xOneOriginRegion" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsConfig.property.xOneOriginRegion"></a>

```typescript
public readonly xOneOriginRegion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_subscriptions#x_one_origin_region DataOciOsubSubscriptionSubscriptions#x_one_origin_region}.

---

### DataOciOsubSubscriptionSubscriptionsFilter <a name="DataOciOsubSubscriptionSubscriptionsFilter" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilter.Initializer"></a>

```typescript
import { dataOciOsubSubscriptionSubscriptions } from 'rhizo-co-terraform-provider-oci'

const dataOciOsubSubscriptionSubscriptionsFilter: dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_subscriptions#name DataOciOsubSubscriptionSubscriptions#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_subscriptions#values DataOciOsubSubscriptionSubscriptions#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_subscriptions#regex DataOciOsubSubscriptionSubscriptions#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_subscriptions#name DataOciOsubSubscriptionSubscriptions#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_subscriptions#values DataOciOsubSubscriptionSubscriptions#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_subscriptions#regex DataOciOsubSubscriptionSubscriptions#regex}.

---

### DataOciOsubSubscriptionSubscriptionsSubscriptions <a name="DataOciOsubSubscriptionSubscriptionsSubscriptions" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptions.Initializer"></a>

```typescript
import { dataOciOsubSubscriptionSubscriptions } from 'rhizo-co-terraform-provider-oci'

const dataOciOsubSubscriptionSubscriptionsSubscriptions: dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptions = { ... }
```


### DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrency <a name="DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrency" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrency"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrency.Initializer"></a>

```typescript
import { dataOciOsubSubscriptionSubscriptions } from 'rhizo-co-terraform-provider-oci'

const dataOciOsubSubscriptionSubscriptionsSubscriptionsCurrency: dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrency = { ... }
```


### DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServices <a name="DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServices" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServices"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServices.Initializer"></a>

```typescript
import { dataOciOsubSubscriptionSubscriptions } from 'rhizo-co-terraform-provider-oci'

const dataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServices: dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServices = { ... }
```


### DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServices <a name="DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServices" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServices"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServices.Initializer"></a>

```typescript
import { dataOciOsubSubscriptionSubscriptions } from 'rhizo-co-terraform-provider-oci'

const dataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServices: dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServices = { ... }
```


### DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProduct <a name="DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProduct" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProduct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProduct.Initializer"></a>

```typescript
import { dataOciOsubSubscriptionSubscriptions } from 'rhizo-co-terraform-provider-oci'

const dataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProduct: dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProduct = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOsubSubscriptionSubscriptionsFilterList <a name="DataOciOsubSubscriptionSubscriptionsFilterList" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterList.Initializer"></a>

```typescript
import { dataOciOsubSubscriptionSubscriptions } from 'rhizo-co-terraform-provider-oci'

new dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterList.get"></a>

```typescript
public get(index: number): DataOciOsubSubscriptionSubscriptionsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilter">DataOciOsubSubscriptionSubscriptionsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciOsubSubscriptionSubscriptionsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilter">DataOciOsubSubscriptionSubscriptionsFilter</a>[]

---


### DataOciOsubSubscriptionSubscriptionsFilterOutputReference <a name="DataOciOsubSubscriptionSubscriptionsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciOsubSubscriptionSubscriptions } from 'rhizo-co-terraform-provider-oci'

new dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilter">DataOciOsubSubscriptionSubscriptionsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciOsubSubscriptionSubscriptionsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilter">DataOciOsubSubscriptionSubscriptionsFilter</a>

---


### DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyList <a name="DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyList" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyList.Initializer"></a>

```typescript
import { dataOciOsubSubscriptionSubscriptions } from 'rhizo-co-terraform-provider-oci'

new dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyList.get"></a>

```typescript
public get(index: number): DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference <a name="DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.Initializer"></a>

```typescript
import { dataOciOsubSubscriptionSubscriptions } from 'rhizo-co-terraform-provider-oci'

new dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.property.isoCode">isoCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.property.stdPrecision">stdPrecision</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrency">DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrency</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isoCode`<sup>Required</sup> <a name="isoCode" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.property.isoCode"></a>

```typescript
public readonly isoCode: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `stdPrecision`<sup>Required</sup> <a name="stdPrecision" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.property.stdPrecision"></a>

```typescript
public readonly stdPrecision: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrency;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrency">DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrency</a>

---


### DataOciOsubSubscriptionSubscriptionsSubscriptionsList <a name="DataOciOsubSubscriptionSubscriptionsSubscriptionsList" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsList.Initializer"></a>

```typescript
import { dataOciOsubSubscriptionSubscriptions } from 'rhizo-co-terraform-provider-oci'

new dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsList.get"></a>

```typescript
public get(index: number): DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference <a name="DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.Initializer"></a>

```typescript
import { dataOciOsubSubscriptionSubscriptions } from 'rhizo-co-terraform-provider-oci'

new dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.property.currency">currency</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyList">DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.property.serviceName">serviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.property.subscribedServices">subscribedServices</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesList">DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.property.timeEnd">timeEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.property.timeStart">timeStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptions">DataOciOsubSubscriptionSubscriptionsSubscriptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `currency`<sup>Required</sup> <a name="currency" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.property.currency"></a>

```typescript
public readonly currency: DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyList">DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyList</a>

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `subscribedServices`<sup>Required</sup> <a name="subscribedServices" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.property.subscribedServices"></a>

```typescript
public readonly subscribedServices: DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesList">DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesList</a>

---

##### `timeEnd`<sup>Required</sup> <a name="timeEnd" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.property.timeEnd"></a>

```typescript
public readonly timeEnd: string;
```

- *Type:* string

---

##### `timeStart`<sup>Required</sup> <a name="timeStart" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.property.timeStart"></a>

```typescript
public readonly timeStart: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOsubSubscriptionSubscriptionsSubscriptions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptions">DataOciOsubSubscriptionSubscriptionsSubscriptions</a>

---


### DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList <a name="DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList.Initializer"></a>

```typescript
import { dataOciOsubSubscriptionSubscriptions } from 'rhizo-co-terraform-provider-oci'

new dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList.get"></a>

```typescript
public get(index: number): DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference <a name="DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.Initializer"></a>

```typescript
import { dataOciOsubSubscriptionSubscriptions } from 'rhizo-co-terraform-provider-oci'

new dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.property.availableAmount">availableAmount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.property.fundedAllocationValue">fundedAllocationValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.property.lineNetAmount">lineNetAmount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.property.quantity">quantity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.property.timeEnd">timeEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.property.timeStart">timeStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServices">DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServices</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availableAmount`<sup>Required</sup> <a name="availableAmount" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.property.availableAmount"></a>

```typescript
public readonly availableAmount: string;
```

- *Type:* string

---

##### `fundedAllocationValue`<sup>Required</sup> <a name="fundedAllocationValue" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.property.fundedAllocationValue"></a>

```typescript
public readonly fundedAllocationValue: string;
```

- *Type:* string

---

##### `lineNetAmount`<sup>Required</sup> <a name="lineNetAmount" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.property.lineNetAmount"></a>

```typescript
public readonly lineNetAmount: string;
```

- *Type:* string

---

##### `quantity`<sup>Required</sup> <a name="quantity" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.property.quantity"></a>

```typescript
public readonly quantity: string;
```

- *Type:* string

---

##### `timeEnd`<sup>Required</sup> <a name="timeEnd" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.property.timeEnd"></a>

```typescript
public readonly timeEnd: string;
```

- *Type:* string

---

##### `timeStart`<sup>Required</sup> <a name="timeStart" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.property.timeStart"></a>

```typescript
public readonly timeStart: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServices;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServices">DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServices</a>

---


### DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesList <a name="DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesList" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesList.Initializer"></a>

```typescript
import { dataOciOsubSubscriptionSubscriptions } from 'rhizo-co-terraform-provider-oci'

new dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesList.get"></a>

```typescript
public get(index: number): DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference <a name="DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.Initializer"></a>

```typescript
import { dataOciOsubSubscriptionSubscriptions } from 'rhizo-co-terraform-provider-oci'

new dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.bookingOptyNumber">bookingOptyNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.commitmentServices">commitmentServices</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList">DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.csi">csi</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.dataCenterRegion">dataCenterRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.fundedAllocationValue">fundedAllocationValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.isIntentToPay">isIntentToPay</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.netUnitPrice">netUnitPrice</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.operationType">operationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.orderNumber">orderNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.partnerTransactionType">partnerTransactionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.pricingModel">pricingModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.product">product</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList">DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.programType">programType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.promoType">promoType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.quantity">quantity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.termValue">termValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.termValueUom">termValueUom</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.timeEnd">timeEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.timeStart">timeStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.totalValue">totalValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServices">DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServices</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bookingOptyNumber`<sup>Required</sup> <a name="bookingOptyNumber" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.bookingOptyNumber"></a>

```typescript
public readonly bookingOptyNumber: string;
```

- *Type:* string

---

##### `commitmentServices`<sup>Required</sup> <a name="commitmentServices" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.commitmentServices"></a>

```typescript
public readonly commitmentServices: DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList">DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList</a>

---

##### `csi`<sup>Required</sup> <a name="csi" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.csi"></a>

```typescript
public readonly csi: string;
```

- *Type:* string

---

##### `dataCenterRegion`<sup>Required</sup> <a name="dataCenterRegion" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.dataCenterRegion"></a>

```typescript
public readonly dataCenterRegion: string;
```

- *Type:* string

---

##### `fundedAllocationValue`<sup>Required</sup> <a name="fundedAllocationValue" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.fundedAllocationValue"></a>

```typescript
public readonly fundedAllocationValue: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isIntentToPay`<sup>Required</sup> <a name="isIntentToPay" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.isIntentToPay"></a>

```typescript
public readonly isIntentToPay: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `netUnitPrice`<sup>Required</sup> <a name="netUnitPrice" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.netUnitPrice"></a>

```typescript
public readonly netUnitPrice: string;
```

- *Type:* string

---

##### `operationType`<sup>Required</sup> <a name="operationType" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.operationType"></a>

```typescript
public readonly operationType: string;
```

- *Type:* string

---

##### `orderNumber`<sup>Required</sup> <a name="orderNumber" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.orderNumber"></a>

```typescript
public readonly orderNumber: string;
```

- *Type:* string

---

##### `partnerTransactionType`<sup>Required</sup> <a name="partnerTransactionType" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.partnerTransactionType"></a>

```typescript
public readonly partnerTransactionType: string;
```

- *Type:* string

---

##### `pricingModel`<sup>Required</sup> <a name="pricingModel" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.pricingModel"></a>

```typescript
public readonly pricingModel: string;
```

- *Type:* string

---

##### `product`<sup>Required</sup> <a name="product" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.product"></a>

```typescript
public readonly product: DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList">DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList</a>

---

##### `programType`<sup>Required</sup> <a name="programType" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.programType"></a>

```typescript
public readonly programType: string;
```

- *Type:* string

---

##### `promoType`<sup>Required</sup> <a name="promoType" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.promoType"></a>

```typescript
public readonly promoType: string;
```

- *Type:* string

---

##### `quantity`<sup>Required</sup> <a name="quantity" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.quantity"></a>

```typescript
public readonly quantity: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `termValue`<sup>Required</sup> <a name="termValue" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.termValue"></a>

```typescript
public readonly termValue: string;
```

- *Type:* string

---

##### `termValueUom`<sup>Required</sup> <a name="termValueUom" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.termValueUom"></a>

```typescript
public readonly termValueUom: string;
```

- *Type:* string

---

##### `timeEnd`<sup>Required</sup> <a name="timeEnd" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.timeEnd"></a>

```typescript
public readonly timeEnd: string;
```

- *Type:* string

---

##### `timeStart`<sup>Required</sup> <a name="timeStart" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.timeStart"></a>

```typescript
public readonly timeStart: string;
```

- *Type:* string

---

##### `totalValue`<sup>Required</sup> <a name="totalValue" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.totalValue"></a>

```typescript
public readonly totalValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServices;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServices">DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServices</a>

---


### DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList <a name="DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList.Initializer"></a>

```typescript
import { dataOciOsubSubscriptionSubscriptions } from 'rhizo-co-terraform-provider-oci'

new dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList.get"></a>

```typescript
public get(index: number): DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference <a name="DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.Initializer"></a>

```typescript
import { dataOciOsubSubscriptionSubscriptions } from 'rhizo-co-terraform-provider-oci'

new dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.property.partNumber">partNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.property.provisioningGroup">provisioningGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.property.unitOfMeasure">unitOfMeasure</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProduct">DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProduct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `partNumber`<sup>Required</sup> <a name="partNumber" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.property.partNumber"></a>

```typescript
public readonly partNumber: string;
```

- *Type:* string

---

##### `provisioningGroup`<sup>Required</sup> <a name="provisioningGroup" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.property.provisioningGroup"></a>

```typescript
public readonly provisioningGroup: string;
```

- *Type:* string

---

##### `unitOfMeasure`<sup>Required</sup> <a name="unitOfMeasure" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.property.unitOfMeasure"></a>

```typescript
public readonly unitOfMeasure: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProduct;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProduct">DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProduct</a>

---



