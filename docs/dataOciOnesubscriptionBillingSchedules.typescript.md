# `dataOciOnesubscriptionBillingSchedules` Submodule <a name="`dataOciOnesubscriptionBillingSchedules` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOnesubscriptionBillingSchedules <a name="DataOciOnesubscriptionBillingSchedules" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_billing_schedules oci_onesubscription_billing_schedules}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.Initializer"></a>

```typescript
import { dataOciOnesubscriptionBillingSchedules } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules(scope: Construct, id: string, config: DataOciOnesubscriptionBillingSchedulesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesConfig">DataOciOnesubscriptionBillingSchedulesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesConfig">DataOciOnesubscriptionBillingSchedulesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.resetSubscribedServiceId">resetSubscribedServiceId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciOnesubscriptionBillingSchedulesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilter">DataOciOnesubscriptionBillingSchedulesFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.resetId"></a>

```typescript
public resetId(): void
```

##### `resetSubscribedServiceId` <a name="resetSubscribedServiceId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.resetSubscribedServiceId"></a>

```typescript
public resetSubscribedServiceId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOnesubscriptionBillingSchedules resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.isConstruct"></a>

```typescript
import { dataOciOnesubscriptionBillingSchedules } from 'rhizo-co-terraform-provider-oci'

dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.isTerraformElement"></a>

```typescript
import { dataOciOnesubscriptionBillingSchedules } from 'rhizo-co-terraform-provider-oci'

dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.isTerraformDataSource"></a>

```typescript
import { dataOciOnesubscriptionBillingSchedules } from 'rhizo-co-terraform-provider-oci'

dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.generateConfigForImport"></a>

```typescript
import { dataOciOnesubscriptionBillingSchedules } from 'rhizo-co-terraform-provider-oci'

dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciOnesubscriptionBillingSchedules resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciOnesubscriptionBillingSchedules to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciOnesubscriptionBillingSchedules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_billing_schedules#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOnesubscriptionBillingSchedules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.billingSchedules">billingSchedules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesList">DataOciOnesubscriptionBillingSchedulesBillingSchedulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterList">DataOciOnesubscriptionBillingSchedulesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilter">DataOciOnesubscriptionBillingSchedulesFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.subscribedServiceIdInput">subscribedServiceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.subscriptionIdInput">subscriptionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.subscribedServiceId">subscribedServiceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.subscriptionId">subscriptionId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `billingSchedules`<sup>Required</sup> <a name="billingSchedules" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.billingSchedules"></a>

```typescript
public readonly billingSchedules: DataOciOnesubscriptionBillingSchedulesBillingSchedulesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesList">DataOciOnesubscriptionBillingSchedulesBillingSchedulesList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.filter"></a>

```typescript
public readonly filter: DataOciOnesubscriptionBillingSchedulesFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterList">DataOciOnesubscriptionBillingSchedulesFilterList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciOnesubscriptionBillingSchedulesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilter">DataOciOnesubscriptionBillingSchedulesFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `subscribedServiceIdInput`<sup>Optional</sup> <a name="subscribedServiceIdInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.subscribedServiceIdInput"></a>

```typescript
public readonly subscribedServiceIdInput: string;
```

- *Type:* string

---

##### `subscriptionIdInput`<sup>Optional</sup> <a name="subscriptionIdInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.subscriptionIdInput"></a>

```typescript
public readonly subscriptionIdInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `subscribedServiceId`<sup>Required</sup> <a name="subscribedServiceId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.subscribedServiceId"></a>

```typescript
public readonly subscribedServiceId: string;
```

- *Type:* string

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.subscriptionId"></a>

```typescript
public readonly subscriptionId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOnesubscriptionBillingSchedulesBillingSchedules <a name="DataOciOnesubscriptionBillingSchedulesBillingSchedules" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedules.Initializer"></a>

```typescript
import { dataOciOnesubscriptionBillingSchedules } from 'rhizo-co-terraform-provider-oci'

const dataOciOnesubscriptionBillingSchedulesBillingSchedules: dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedules = { ... }
```


### DataOciOnesubscriptionBillingSchedulesBillingSchedulesProduct <a name="DataOciOnesubscriptionBillingSchedulesBillingSchedulesProduct" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProduct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProduct.Initializer"></a>

```typescript
import { dataOciOnesubscriptionBillingSchedules } from 'rhizo-co-terraform-provider-oci'

const dataOciOnesubscriptionBillingSchedulesBillingSchedulesProduct: dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProduct = { ... }
```


### DataOciOnesubscriptionBillingSchedulesConfig <a name="DataOciOnesubscriptionBillingSchedulesConfig" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesConfig.Initializer"></a>

```typescript
import { dataOciOnesubscriptionBillingSchedules } from 'rhizo-co-terraform-provider-oci'

const dataOciOnesubscriptionBillingSchedulesConfig: dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_billing_schedules#compartment_id DataOciOnesubscriptionBillingSchedules#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesConfig.property.subscriptionId">subscriptionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_billing_schedules#subscription_id DataOciOnesubscriptionBillingSchedules#subscription_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilter">DataOciOnesubscriptionBillingSchedulesFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_billing_schedules#id DataOciOnesubscriptionBillingSchedules#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesConfig.property.subscribedServiceId">subscribedServiceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_billing_schedules#subscribed_service_id DataOciOnesubscriptionBillingSchedules#subscribed_service_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_billing_schedules#compartment_id DataOciOnesubscriptionBillingSchedules#compartment_id}.

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesConfig.property.subscriptionId"></a>

```typescript
public readonly subscriptionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_billing_schedules#subscription_id DataOciOnesubscriptionBillingSchedules#subscription_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciOnesubscriptionBillingSchedulesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilter">DataOciOnesubscriptionBillingSchedulesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_billing_schedules#filter DataOciOnesubscriptionBillingSchedules#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_billing_schedules#id DataOciOnesubscriptionBillingSchedules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `subscribedServiceId`<sup>Optional</sup> <a name="subscribedServiceId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesConfig.property.subscribedServiceId"></a>

```typescript
public readonly subscribedServiceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_billing_schedules#subscribed_service_id DataOciOnesubscriptionBillingSchedules#subscribed_service_id}.

---

### DataOciOnesubscriptionBillingSchedulesFilter <a name="DataOciOnesubscriptionBillingSchedulesFilter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilter.Initializer"></a>

```typescript
import { dataOciOnesubscriptionBillingSchedules } from 'rhizo-co-terraform-provider-oci'

const dataOciOnesubscriptionBillingSchedulesFilter: dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_billing_schedules#name DataOciOnesubscriptionBillingSchedules#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_billing_schedules#values DataOciOnesubscriptionBillingSchedules#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_billing_schedules#regex DataOciOnesubscriptionBillingSchedules#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_billing_schedules#name DataOciOnesubscriptionBillingSchedules#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_billing_schedules#values DataOciOnesubscriptionBillingSchedules#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_billing_schedules#regex DataOciOnesubscriptionBillingSchedules#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciOnesubscriptionBillingSchedulesBillingSchedulesList <a name="DataOciOnesubscriptionBillingSchedulesBillingSchedulesList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesList.Initializer"></a>

```typescript
import { dataOciOnesubscriptionBillingSchedules } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesList.get"></a>

```typescript
public get(index: number): DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference <a name="DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.Initializer"></a>

```typescript
import { dataOciOnesubscriptionBillingSchedules } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.amount">amount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.arCustomerTransactionId">arCustomerTransactionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.arInvoiceNumber">arInvoiceNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.billingFrequency">billingFrequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.invoiceStatus">invoiceStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.netUnitPrice">netUnitPrice</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.orderNumber">orderNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.product">product</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList">DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.quantity">quantity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.subscribedServiceId">subscribedServiceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.timeEnd">timeEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.timeInvoicing">timeInvoicing</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.timeStart">timeStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedules">DataOciOnesubscriptionBillingSchedulesBillingSchedules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `amount`<sup>Required</sup> <a name="amount" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.amount"></a>

```typescript
public readonly amount: string;
```

- *Type:* string

---

##### `arCustomerTransactionId`<sup>Required</sup> <a name="arCustomerTransactionId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.arCustomerTransactionId"></a>

```typescript
public readonly arCustomerTransactionId: string;
```

- *Type:* string

---

##### `arInvoiceNumber`<sup>Required</sup> <a name="arInvoiceNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.arInvoiceNumber"></a>

```typescript
public readonly arInvoiceNumber: string;
```

- *Type:* string

---

##### `billingFrequency`<sup>Required</sup> <a name="billingFrequency" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.billingFrequency"></a>

```typescript
public readonly billingFrequency: string;
```

- *Type:* string

---

##### `invoiceStatus`<sup>Required</sup> <a name="invoiceStatus" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.invoiceStatus"></a>

```typescript
public readonly invoiceStatus: string;
```

- *Type:* string

---

##### `netUnitPrice`<sup>Required</sup> <a name="netUnitPrice" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.netUnitPrice"></a>

```typescript
public readonly netUnitPrice: string;
```

- *Type:* string

---

##### `orderNumber`<sup>Required</sup> <a name="orderNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.orderNumber"></a>

```typescript
public readonly orderNumber: string;
```

- *Type:* string

---

##### `product`<sup>Required</sup> <a name="product" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.product"></a>

```typescript
public readonly product: DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList">DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList</a>

---

##### `quantity`<sup>Required</sup> <a name="quantity" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.quantity"></a>

```typescript
public readonly quantity: string;
```

- *Type:* string

---

##### `subscribedServiceId`<sup>Required</sup> <a name="subscribedServiceId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.subscribedServiceId"></a>

```typescript
public readonly subscribedServiceId: string;
```

- *Type:* string

---

##### `timeEnd`<sup>Required</sup> <a name="timeEnd" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.timeEnd"></a>

```typescript
public readonly timeEnd: string;
```

- *Type:* string

---

##### `timeInvoicing`<sup>Required</sup> <a name="timeInvoicing" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.timeInvoicing"></a>

```typescript
public readonly timeInvoicing: string;
```

- *Type:* string

---

##### `timeStart`<sup>Required</sup> <a name="timeStart" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.timeStart"></a>

```typescript
public readonly timeStart: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOnesubscriptionBillingSchedulesBillingSchedules;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedules">DataOciOnesubscriptionBillingSchedulesBillingSchedules</a>

---


### DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList <a name="DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList.Initializer"></a>

```typescript
import { dataOciOnesubscriptionBillingSchedules } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList.get"></a>

```typescript
public get(index: number): DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference <a name="DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.Initializer"></a>

```typescript
import { dataOciOnesubscriptionBillingSchedules } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.property.partNumber">partNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProduct">DataOciOnesubscriptionBillingSchedulesBillingSchedulesProduct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `partNumber`<sup>Required</sup> <a name="partNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.property.partNumber"></a>

```typescript
public readonly partNumber: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOnesubscriptionBillingSchedulesBillingSchedulesProduct;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProduct">DataOciOnesubscriptionBillingSchedulesBillingSchedulesProduct</a>

---


### DataOciOnesubscriptionBillingSchedulesFilterList <a name="DataOciOnesubscriptionBillingSchedulesFilterList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterList.Initializer"></a>

```typescript
import { dataOciOnesubscriptionBillingSchedules } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterList.get"></a>

```typescript
public get(index: number): DataOciOnesubscriptionBillingSchedulesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilter">DataOciOnesubscriptionBillingSchedulesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciOnesubscriptionBillingSchedulesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilter">DataOciOnesubscriptionBillingSchedulesFilter</a>[]

---


### DataOciOnesubscriptionBillingSchedulesFilterOutputReference <a name="DataOciOnesubscriptionBillingSchedulesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.Initializer"></a>

```typescript
import { dataOciOnesubscriptionBillingSchedules } from 'rhizo-co-terraform-provider-oci'

new dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilter">DataOciOnesubscriptionBillingSchedulesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciOnesubscriptionBillingSchedulesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilter">DataOciOnesubscriptionBillingSchedulesFilter</a>

---



