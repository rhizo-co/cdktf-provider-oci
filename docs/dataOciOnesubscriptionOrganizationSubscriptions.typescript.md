# `dataOciOnesubscriptionOrganizationSubscriptions` Submodule <a name="`dataOciOnesubscriptionOrganizationSubscriptions` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOnesubscriptionOrganizationSubscriptions <a name="DataOciOnesubscriptionOrganizationSubscriptions" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_organization_subscriptions oci_onesubscription_organization_subscriptions}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.Initializer"></a>

```typescript
import { dataOciOnesubscriptionOrganizationSubscriptions } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions(scope: Construct, id: string, config: DataOciOnesubscriptionOrganizationSubscriptionsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsConfig">DataOciOnesubscriptionOrganizationSubscriptionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsConfig">DataOciOnesubscriptionOrganizationSubscriptionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciOnesubscriptionOrganizationSubscriptionsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilter">DataOciOnesubscriptionOrganizationSubscriptionsFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOnesubscriptionOrganizationSubscriptions resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.isConstruct"></a>

```typescript
import { dataOciOnesubscriptionOrganizationSubscriptions } from 'rhizo-co-terraform-provider-oci'

dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.isTerraformElement"></a>

```typescript
import { dataOciOnesubscriptionOrganizationSubscriptions } from 'rhizo-co-terraform-provider-oci'

dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.isTerraformDataSource"></a>

```typescript
import { dataOciOnesubscriptionOrganizationSubscriptions } from 'rhizo-co-terraform-provider-oci'

dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.generateConfigForImport"></a>

```typescript
import { dataOciOnesubscriptionOrganizationSubscriptions } from 'rhizo-co-terraform-provider-oci'

dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciOnesubscriptionOrganizationSubscriptions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciOnesubscriptionOrganizationSubscriptions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciOnesubscriptionOrganizationSubscriptions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_organization_subscriptions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOnesubscriptionOrganizationSubscriptions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterList">DataOciOnesubscriptionOrganizationSubscriptionsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.organizationSubscriptions">organizationSubscriptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList">DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilter">DataOciOnesubscriptionOrganizationSubscriptionsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.filter"></a>

```typescript
public readonly filter: DataOciOnesubscriptionOrganizationSubscriptionsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterList">DataOciOnesubscriptionOrganizationSubscriptionsFilterList</a>

---

##### `organizationSubscriptions`<sup>Required</sup> <a name="organizationSubscriptions" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.organizationSubscriptions"></a>

```typescript
public readonly organizationSubscriptions: DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList">DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciOnesubscriptionOrganizationSubscriptionsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilter">DataOciOnesubscriptionOrganizationSubscriptionsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOnesubscriptionOrganizationSubscriptionsConfig <a name="DataOciOnesubscriptionOrganizationSubscriptionsConfig" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsConfig.Initializer"></a>

```typescript
import { dataOciOnesubscriptionOrganizationSubscriptions } from 'rhizo-co-terraform-provider-oci'

const dataOciOnesubscriptionOrganizationSubscriptionsConfig: dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_organization_subscriptions#compartment_id DataOciOnesubscriptionOrganizationSubscriptions#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilter">DataOciOnesubscriptionOrganizationSubscriptionsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_organization_subscriptions#id DataOciOnesubscriptionOrganizationSubscriptions#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_organization_subscriptions#compartment_id DataOciOnesubscriptionOrganizationSubscriptions#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciOnesubscriptionOrganizationSubscriptionsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilter">DataOciOnesubscriptionOrganizationSubscriptionsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_organization_subscriptions#filter DataOciOnesubscriptionOrganizationSubscriptions#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_organization_subscriptions#id DataOciOnesubscriptionOrganizationSubscriptions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciOnesubscriptionOrganizationSubscriptionsFilter <a name="DataOciOnesubscriptionOrganizationSubscriptionsFilter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilter.Initializer"></a>

```typescript
import { dataOciOnesubscriptionOrganizationSubscriptions } from 'rhizo-co-terraform-provider-oci'

const dataOciOnesubscriptionOrganizationSubscriptionsFilter: dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_organization_subscriptions#name DataOciOnesubscriptionOrganizationSubscriptions#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_organization_subscriptions#values DataOciOnesubscriptionOrganizationSubscriptions#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_organization_subscriptions#regex DataOciOnesubscriptionOrganizationSubscriptions#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_organization_subscriptions#name DataOciOnesubscriptionOrganizationSubscriptions#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_organization_subscriptions#values DataOciOnesubscriptionOrganizationSubscriptions#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_organization_subscriptions#regex DataOciOnesubscriptionOrganizationSubscriptions#regex}.

---

### DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptions <a name="DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptions" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptions.Initializer"></a>

```typescript
import { dataOciOnesubscriptionOrganizationSubscriptions } from 'rhizo-co-terraform-provider-oci'

const dataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptions: dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptions = { ... }
```


### DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrency <a name="DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrency" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrency"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrency.Initializer"></a>

```typescript
import { dataOciOnesubscriptionOrganizationSubscriptions } from 'rhizo-co-terraform-provider-oci'

const dataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrency: dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrency = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOnesubscriptionOrganizationSubscriptionsFilterList <a name="DataOciOnesubscriptionOrganizationSubscriptionsFilterList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterList.Initializer"></a>

```typescript
import { dataOciOnesubscriptionOrganizationSubscriptions } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterList.get"></a>

```typescript
public get(index: number): DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilter">DataOciOnesubscriptionOrganizationSubscriptionsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciOnesubscriptionOrganizationSubscriptionsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilter">DataOciOnesubscriptionOrganizationSubscriptionsFilter</a>[]

---


### DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference <a name="DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciOnesubscriptionOrganizationSubscriptions } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilter">DataOciOnesubscriptionOrganizationSubscriptionsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciOnesubscriptionOrganizationSubscriptionsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilter">DataOciOnesubscriptionOrganizationSubscriptionsFilter</a>

---


### DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList <a name="DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList.Initializer"></a>

```typescript
import { dataOciOnesubscriptionOrganizationSubscriptions } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList.get"></a>

```typescript
public get(index: number): DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference <a name="DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.Initializer"></a>

```typescript
import { dataOciOnesubscriptionOrganizationSubscriptions } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.property.isoCode">isoCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.property.stdPrecision">stdPrecision</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrency">DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrency</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isoCode`<sup>Required</sup> <a name="isoCode" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.property.isoCode"></a>

```typescript
public readonly isoCode: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `stdPrecision`<sup>Required</sup> <a name="stdPrecision" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.property.stdPrecision"></a>

```typescript
public readonly stdPrecision: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrency;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrency">DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrency</a>

---


### DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList <a name="DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList.Initializer"></a>

```typescript
import { dataOciOnesubscriptionOrganizationSubscriptions } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList.get"></a>

```typescript
public get(index: number): DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference <a name="DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.Initializer"></a>

```typescript
import { dataOciOnesubscriptionOrganizationSubscriptions } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.property.currency">currency</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList">DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.property.serviceName">serviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.property.timeEnd">timeEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.property.timeStart">timeStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.property.totalValue">totalValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptions">DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `currency`<sup>Required</sup> <a name="currency" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.property.currency"></a>

```typescript
public readonly currency: DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList">DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `timeEnd`<sup>Required</sup> <a name="timeEnd" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.property.timeEnd"></a>

```typescript
public readonly timeEnd: string;
```

- *Type:* string

---

##### `timeStart`<sup>Required</sup> <a name="timeStart" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.property.timeStart"></a>

```typescript
public readonly timeStart: string;
```

- *Type:* string

---

##### `totalValue`<sup>Required</sup> <a name="totalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.property.totalValue"></a>

```typescript
public readonly totalValue: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptions">DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptions</a>

---



