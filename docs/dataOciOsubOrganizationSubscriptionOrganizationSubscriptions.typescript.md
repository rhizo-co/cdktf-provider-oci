# `dataOciOsubOrganizationSubscriptionOrganizationSubscriptions` Submodule <a name="`dataOciOsubOrganizationSubscriptionOrganizationSubscriptions` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOsubOrganizationSubscriptionOrganizationSubscriptions <a name="DataOciOsubOrganizationSubscriptionOrganizationSubscriptions" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_organization_subscription_organization_subscriptions oci_osub_organization_subscription_organization_subscriptions}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.Initializer"></a>

```typescript
import { dataOciOsubOrganizationSubscriptionOrganizationSubscriptions } from 'rhizo-co-terraform-provider-oci'

new dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions(scope: Construct, id: string, config: DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsConfig">DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsConfig">DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.resetXOneOriginRegion">resetXOneOriginRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilter">DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.resetId"></a>

```typescript
public resetId(): void
```

##### `resetXOneOriginRegion` <a name="resetXOneOriginRegion" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.resetXOneOriginRegion"></a>

```typescript
public resetXOneOriginRegion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOsubOrganizationSubscriptionOrganizationSubscriptions resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.isConstruct"></a>

```typescript
import { dataOciOsubOrganizationSubscriptionOrganizationSubscriptions } from 'rhizo-co-terraform-provider-oci'

dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.isTerraformElement"></a>

```typescript
import { dataOciOsubOrganizationSubscriptionOrganizationSubscriptions } from 'rhizo-co-terraform-provider-oci'

dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.isTerraformDataSource"></a>

```typescript
import { dataOciOsubOrganizationSubscriptionOrganizationSubscriptions } from 'rhizo-co-terraform-provider-oci'

dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.generateConfigForImport"></a>

```typescript
import { dataOciOsubOrganizationSubscriptionOrganizationSubscriptions } from 'rhizo-co-terraform-provider-oci'

dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciOsubOrganizationSubscriptionOrganizationSubscriptions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciOsubOrganizationSubscriptionOrganizationSubscriptions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciOsubOrganizationSubscriptionOrganizationSubscriptions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_organization_subscription_organization_subscriptions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOsubOrganizationSubscriptionOrganizationSubscriptions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterList">DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.subscriptions">subscriptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsList">DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilter">DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.subscriptionIdsInput">subscriptionIdsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.xOneOriginRegionInput">xOneOriginRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.subscriptionIds">subscriptionIds</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.xOneOriginRegion">xOneOriginRegion</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.filter"></a>

```typescript
public readonly filter: DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterList">DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterList</a>

---

##### `subscriptions`<sup>Required</sup> <a name="subscriptions" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.subscriptions"></a>

```typescript
public readonly subscriptions: DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsList">DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilter">DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `subscriptionIdsInput`<sup>Optional</sup> <a name="subscriptionIdsInput" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.subscriptionIdsInput"></a>

```typescript
public readonly subscriptionIdsInput: string;
```

- *Type:* string

---

##### `xOneOriginRegionInput`<sup>Optional</sup> <a name="xOneOriginRegionInput" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.xOneOriginRegionInput"></a>

```typescript
public readonly xOneOriginRegionInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `subscriptionIds`<sup>Required</sup> <a name="subscriptionIds" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.subscriptionIds"></a>

```typescript
public readonly subscriptionIds: string;
```

- *Type:* string

---

##### `xOneOriginRegion`<sup>Required</sup> <a name="xOneOriginRegion" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.xOneOriginRegion"></a>

```typescript
public readonly xOneOriginRegion: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptions.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsConfig <a name="DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsConfig" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsConfig.Initializer"></a>

```typescript
import { dataOciOsubOrganizationSubscriptionOrganizationSubscriptions } from 'rhizo-co-terraform-provider-oci'

const dataOciOsubOrganizationSubscriptionOrganizationSubscriptionsConfig: dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_organization_subscription_organization_subscriptions#compartment_id DataOciOsubOrganizationSubscriptionOrganizationSubscriptions#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsConfig.property.subscriptionIds">subscriptionIds</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_organization_subscription_organization_subscriptions#subscription_ids DataOciOsubOrganizationSubscriptionOrganizationSubscriptions#subscription_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilter">DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_organization_subscription_organization_subscriptions#id DataOciOsubOrganizationSubscriptionOrganizationSubscriptions#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsConfig.property.xOneOriginRegion">xOneOriginRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_organization_subscription_organization_subscriptions#x_one_origin_region DataOciOsubOrganizationSubscriptionOrganizationSubscriptions#x_one_origin_region}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_organization_subscription_organization_subscriptions#compartment_id DataOciOsubOrganizationSubscriptionOrganizationSubscriptions#compartment_id}.

---

##### `subscriptionIds`<sup>Required</sup> <a name="subscriptionIds" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsConfig.property.subscriptionIds"></a>

```typescript
public readonly subscriptionIds: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_organization_subscription_organization_subscriptions#subscription_ids DataOciOsubOrganizationSubscriptionOrganizationSubscriptions#subscription_ids}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilter">DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_organization_subscription_organization_subscriptions#filter DataOciOsubOrganizationSubscriptionOrganizationSubscriptions#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_organization_subscription_organization_subscriptions#id DataOciOsubOrganizationSubscriptionOrganizationSubscriptions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `xOneOriginRegion`<sup>Optional</sup> <a name="xOneOriginRegion" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsConfig.property.xOneOriginRegion"></a>

```typescript
public readonly xOneOriginRegion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_organization_subscription_organization_subscriptions#x_one_origin_region DataOciOsubOrganizationSubscriptionOrganizationSubscriptions#x_one_origin_region}.

---

### DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilter <a name="DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilter" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilter.Initializer"></a>

```typescript
import { dataOciOsubOrganizationSubscriptionOrganizationSubscriptions } from 'rhizo-co-terraform-provider-oci'

const dataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilter: dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_organization_subscription_organization_subscriptions#name DataOciOsubOrganizationSubscriptionOrganizationSubscriptions#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_organization_subscription_organization_subscriptions#values DataOciOsubOrganizationSubscriptionOrganizationSubscriptions#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_organization_subscription_organization_subscriptions#regex DataOciOsubOrganizationSubscriptionOrganizationSubscriptions#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_organization_subscription_organization_subscriptions#name DataOciOsubOrganizationSubscriptionOrganizationSubscriptions#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_organization_subscription_organization_subscriptions#values DataOciOsubOrganizationSubscriptionOrganizationSubscriptions#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_organization_subscription_organization_subscriptions#regex DataOciOsubOrganizationSubscriptionOrganizationSubscriptions#regex}.

---

### DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptions <a name="DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptions" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptions.Initializer"></a>

```typescript
import { dataOciOsubOrganizationSubscriptionOrganizationSubscriptions } from 'rhizo-co-terraform-provider-oci'

const dataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptions: dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptions = { ... }
```


### DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrency <a name="DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrency" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrency"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrency.Initializer"></a>

```typescript
import { dataOciOsubOrganizationSubscriptionOrganizationSubscriptions } from 'rhizo-co-terraform-provider-oci'

const dataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrency: dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrency = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterList <a name="DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterList" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterList.Initializer"></a>

```typescript
import { dataOciOsubOrganizationSubscriptionOrganizationSubscriptions } from 'rhizo-co-terraform-provider-oci'

new dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterList.get"></a>

```typescript
public get(index: number): DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilter">DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilter">DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilter</a>[]

---


### DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference <a name="DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciOsubOrganizationSubscriptionOrganizationSubscriptions } from 'rhizo-co-terraform-provider-oci'

new dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilter">DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilter">DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsFilter</a>

---


### DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyList <a name="DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyList" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyList.Initializer"></a>

```typescript
import { dataOciOsubOrganizationSubscriptionOrganizationSubscriptions } from 'rhizo-co-terraform-provider-oci'

new dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyList.get"></a>

```typescript
public get(index: number): DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference <a name="DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.Initializer"></a>

```typescript
import { dataOciOsubOrganizationSubscriptionOrganizationSubscriptions } from 'rhizo-co-terraform-provider-oci'

new dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.property.isoCode">isoCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.property.stdPrecision">stdPrecision</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrency">DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrency</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isoCode`<sup>Required</sup> <a name="isoCode" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.property.isoCode"></a>

```typescript
public readonly isoCode: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `stdPrecision`<sup>Required</sup> <a name="stdPrecision" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.property.stdPrecision"></a>

```typescript
public readonly stdPrecision: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrency;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrency">DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrency</a>

---


### DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsList <a name="DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsList" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsList.Initializer"></a>

```typescript
import { dataOciOsubOrganizationSubscriptionOrganizationSubscriptions } from 'rhizo-co-terraform-provider-oci'

new dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsList.get"></a>

```typescript
public get(index: number): DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference <a name="DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.Initializer"></a>

```typescript
import { dataOciOsubOrganizationSubscriptionOrganizationSubscriptions } from 'rhizo-co-terraform-provider-oci'

new dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.property.currency">currency</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyList">DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.property.serviceName">serviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.property.timeEnd">timeEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.property.timeStart">timeStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.property.totalValue">totalValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptions">DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `currency`<sup>Required</sup> <a name="currency" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.property.currency"></a>

```typescript
public readonly currency: DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyList">DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsCurrencyList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `timeEnd`<sup>Required</sup> <a name="timeEnd" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.property.timeEnd"></a>

```typescript
public readonly timeEnd: string;
```

- *Type:* string

---

##### `timeStart`<sup>Required</sup> <a name="timeStart" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.property.timeStart"></a>

```typescript
public readonly timeStart: string;
```

- *Type:* string

---

##### `totalValue`<sup>Required</sup> <a name="totalValue" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.property.totalValue"></a>

```typescript
public readonly totalValue: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubOrganizationSubscriptionOrganizationSubscriptions.DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptions">DataOciOsubOrganizationSubscriptionOrganizationSubscriptionsSubscriptions</a>

---



