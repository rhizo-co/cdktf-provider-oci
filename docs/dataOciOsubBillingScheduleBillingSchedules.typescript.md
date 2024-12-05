# `dataOciOsubBillingScheduleBillingSchedules` Submodule <a name="`dataOciOsubBillingScheduleBillingSchedules` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOsubBillingScheduleBillingSchedules <a name="DataOciOsubBillingScheduleBillingSchedules" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_billing_schedule_billing_schedules oci_osub_billing_schedule_billing_schedules}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.Initializer"></a>

```typescript
import { dataOciOsubBillingScheduleBillingSchedules } from 'rhizo-co-terraform-provider-oci'

new dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules(scope: Construct, id: string, config: DataOciOsubBillingScheduleBillingSchedulesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesConfig">DataOciOsubBillingScheduleBillingSchedulesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesConfig">DataOciOsubBillingScheduleBillingSchedulesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.resetSubscribedServiceId">resetSubscribedServiceId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.resetXOneOriginRegion">resetXOneOriginRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciOsubBillingScheduleBillingSchedulesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilter">DataOciOsubBillingScheduleBillingSchedulesFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.resetId"></a>

```typescript
public resetId(): void
```

##### `resetSubscribedServiceId` <a name="resetSubscribedServiceId" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.resetSubscribedServiceId"></a>

```typescript
public resetSubscribedServiceId(): void
```

##### `resetXOneOriginRegion` <a name="resetXOneOriginRegion" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.resetXOneOriginRegion"></a>

```typescript
public resetXOneOriginRegion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOsubBillingScheduleBillingSchedules resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.isConstruct"></a>

```typescript
import { dataOciOsubBillingScheduleBillingSchedules } from 'rhizo-co-terraform-provider-oci'

dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.isTerraformElement"></a>

```typescript
import { dataOciOsubBillingScheduleBillingSchedules } from 'rhizo-co-terraform-provider-oci'

dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.isTerraformDataSource"></a>

```typescript
import { dataOciOsubBillingScheduleBillingSchedules } from 'rhizo-co-terraform-provider-oci'

dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.generateConfigForImport"></a>

```typescript
import { dataOciOsubBillingScheduleBillingSchedules } from 'rhizo-co-terraform-provider-oci'

dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciOsubBillingScheduleBillingSchedules resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciOsubBillingScheduleBillingSchedules to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciOsubBillingScheduleBillingSchedules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_billing_schedule_billing_schedules#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOsubBillingScheduleBillingSchedules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.billingSchedules">billingSchedules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList">DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterList">DataOciOsubBillingScheduleBillingSchedulesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilter">DataOciOsubBillingScheduleBillingSchedulesFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.subscribedServiceIdInput">subscribedServiceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.subscriptionIdInput">subscriptionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.xOneOriginRegionInput">xOneOriginRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.subscribedServiceId">subscribedServiceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.subscriptionId">subscriptionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.xOneOriginRegion">xOneOriginRegion</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `billingSchedules`<sup>Required</sup> <a name="billingSchedules" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.billingSchedules"></a>

```typescript
public readonly billingSchedules: DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList">DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.filter"></a>

```typescript
public readonly filter: DataOciOsubBillingScheduleBillingSchedulesFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterList">DataOciOsubBillingScheduleBillingSchedulesFilterList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciOsubBillingScheduleBillingSchedulesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilter">DataOciOsubBillingScheduleBillingSchedulesFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `subscribedServiceIdInput`<sup>Optional</sup> <a name="subscribedServiceIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.subscribedServiceIdInput"></a>

```typescript
public readonly subscribedServiceIdInput: string;
```

- *Type:* string

---

##### `subscriptionIdInput`<sup>Optional</sup> <a name="subscriptionIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.subscriptionIdInput"></a>

```typescript
public readonly subscriptionIdInput: string;
```

- *Type:* string

---

##### `xOneOriginRegionInput`<sup>Optional</sup> <a name="xOneOriginRegionInput" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.xOneOriginRegionInput"></a>

```typescript
public readonly xOneOriginRegionInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `subscribedServiceId`<sup>Required</sup> <a name="subscribedServiceId" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.subscribedServiceId"></a>

```typescript
public readonly subscribedServiceId: string;
```

- *Type:* string

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.subscriptionId"></a>

```typescript
public readonly subscriptionId: string;
```

- *Type:* string

---

##### `xOneOriginRegion`<sup>Required</sup> <a name="xOneOriginRegion" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.xOneOriginRegion"></a>

```typescript
public readonly xOneOriginRegion: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOsubBillingScheduleBillingSchedulesBillingSchedules <a name="DataOciOsubBillingScheduleBillingSchedulesBillingSchedules" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedules.Initializer"></a>

```typescript
import { dataOciOsubBillingScheduleBillingSchedules } from 'rhizo-co-terraform-provider-oci'

const dataOciOsubBillingScheduleBillingSchedulesBillingSchedules: dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedules = { ... }
```


### DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProduct <a name="DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProduct" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProduct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProduct.Initializer"></a>

```typescript
import { dataOciOsubBillingScheduleBillingSchedules } from 'rhizo-co-terraform-provider-oci'

const dataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProduct: dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProduct = { ... }
```


### DataOciOsubBillingScheduleBillingSchedulesConfig <a name="DataOciOsubBillingScheduleBillingSchedulesConfig" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesConfig.Initializer"></a>

```typescript
import { dataOciOsubBillingScheduleBillingSchedules } from 'rhizo-co-terraform-provider-oci'

const dataOciOsubBillingScheduleBillingSchedulesConfig: dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_billing_schedule_billing_schedules#compartment_id DataOciOsubBillingScheduleBillingSchedules#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesConfig.property.subscriptionId">subscriptionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_billing_schedule_billing_schedules#subscription_id DataOciOsubBillingScheduleBillingSchedules#subscription_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilter">DataOciOsubBillingScheduleBillingSchedulesFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_billing_schedule_billing_schedules#id DataOciOsubBillingScheduleBillingSchedules#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesConfig.property.subscribedServiceId">subscribedServiceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_billing_schedule_billing_schedules#subscribed_service_id DataOciOsubBillingScheduleBillingSchedules#subscribed_service_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesConfig.property.xOneOriginRegion">xOneOriginRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_billing_schedule_billing_schedules#x_one_origin_region DataOciOsubBillingScheduleBillingSchedules#x_one_origin_region}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_billing_schedule_billing_schedules#compartment_id DataOciOsubBillingScheduleBillingSchedules#compartment_id}.

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesConfig.property.subscriptionId"></a>

```typescript
public readonly subscriptionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_billing_schedule_billing_schedules#subscription_id DataOciOsubBillingScheduleBillingSchedules#subscription_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciOsubBillingScheduleBillingSchedulesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilter">DataOciOsubBillingScheduleBillingSchedulesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_billing_schedule_billing_schedules#filter DataOciOsubBillingScheduleBillingSchedules#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_billing_schedule_billing_schedules#id DataOciOsubBillingScheduleBillingSchedules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `subscribedServiceId`<sup>Optional</sup> <a name="subscribedServiceId" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesConfig.property.subscribedServiceId"></a>

```typescript
public readonly subscribedServiceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_billing_schedule_billing_schedules#subscribed_service_id DataOciOsubBillingScheduleBillingSchedules#subscribed_service_id}.

---

##### `xOneOriginRegion`<sup>Optional</sup> <a name="xOneOriginRegion" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesConfig.property.xOneOriginRegion"></a>

```typescript
public readonly xOneOriginRegion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_billing_schedule_billing_schedules#x_one_origin_region DataOciOsubBillingScheduleBillingSchedules#x_one_origin_region}.

---

### DataOciOsubBillingScheduleBillingSchedulesFilter <a name="DataOciOsubBillingScheduleBillingSchedulesFilter" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilter.Initializer"></a>

```typescript
import { dataOciOsubBillingScheduleBillingSchedules } from 'rhizo-co-terraform-provider-oci'

const dataOciOsubBillingScheduleBillingSchedulesFilter: dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_billing_schedule_billing_schedules#name DataOciOsubBillingScheduleBillingSchedules#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_billing_schedule_billing_schedules#values DataOciOsubBillingScheduleBillingSchedules#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_billing_schedule_billing_schedules#regex DataOciOsubBillingScheduleBillingSchedules#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_billing_schedule_billing_schedules#name DataOciOsubBillingScheduleBillingSchedules#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_billing_schedule_billing_schedules#values DataOciOsubBillingScheduleBillingSchedules#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_billing_schedule_billing_schedules#regex DataOciOsubBillingScheduleBillingSchedules#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList <a name="DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList.Initializer"></a>

```typescript
import { dataOciOsubBillingScheduleBillingSchedules } from 'rhizo-co-terraform-provider-oci'

new dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList.get"></a>

```typescript
public get(index: number): DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference <a name="DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.Initializer"></a>

```typescript
import { dataOciOsubBillingScheduleBillingSchedules } from 'rhizo-co-terraform-provider-oci'

new dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.property.amount">amount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.property.arCustomerTransactionId">arCustomerTransactionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.property.arInvoiceNumber">arInvoiceNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.property.billingFrequency">billingFrequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.property.invoiceStatus">invoiceStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.property.netUnitPrice">netUnitPrice</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.property.orderNumber">orderNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.property.product">product</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList">DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.property.quantity">quantity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.property.timeEnd">timeEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.property.timeInvoicing">timeInvoicing</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.property.timeStart">timeStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedules">DataOciOsubBillingScheduleBillingSchedulesBillingSchedules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `amount`<sup>Required</sup> <a name="amount" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.property.amount"></a>

```typescript
public readonly amount: string;
```

- *Type:* string

---

##### `arCustomerTransactionId`<sup>Required</sup> <a name="arCustomerTransactionId" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.property.arCustomerTransactionId"></a>

```typescript
public readonly arCustomerTransactionId: string;
```

- *Type:* string

---

##### `arInvoiceNumber`<sup>Required</sup> <a name="arInvoiceNumber" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.property.arInvoiceNumber"></a>

```typescript
public readonly arInvoiceNumber: string;
```

- *Type:* string

---

##### `billingFrequency`<sup>Required</sup> <a name="billingFrequency" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.property.billingFrequency"></a>

```typescript
public readonly billingFrequency: string;
```

- *Type:* string

---

##### `invoiceStatus`<sup>Required</sup> <a name="invoiceStatus" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.property.invoiceStatus"></a>

```typescript
public readonly invoiceStatus: string;
```

- *Type:* string

---

##### `netUnitPrice`<sup>Required</sup> <a name="netUnitPrice" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.property.netUnitPrice"></a>

```typescript
public readonly netUnitPrice: string;
```

- *Type:* string

---

##### `orderNumber`<sup>Required</sup> <a name="orderNumber" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.property.orderNumber"></a>

```typescript
public readonly orderNumber: string;
```

- *Type:* string

---

##### `product`<sup>Required</sup> <a name="product" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.property.product"></a>

```typescript
public readonly product: DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList">DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList</a>

---

##### `quantity`<sup>Required</sup> <a name="quantity" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.property.quantity"></a>

```typescript
public readonly quantity: string;
```

- *Type:* string

---

##### `timeEnd`<sup>Required</sup> <a name="timeEnd" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.property.timeEnd"></a>

```typescript
public readonly timeEnd: string;
```

- *Type:* string

---

##### `timeInvoicing`<sup>Required</sup> <a name="timeInvoicing" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.property.timeInvoicing"></a>

```typescript
public readonly timeInvoicing: string;
```

- *Type:* string

---

##### `timeStart`<sup>Required</sup> <a name="timeStart" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.property.timeStart"></a>

```typescript
public readonly timeStart: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOsubBillingScheduleBillingSchedulesBillingSchedules;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedules">DataOciOsubBillingScheduleBillingSchedulesBillingSchedules</a>

---


### DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList <a name="DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList.Initializer"></a>

```typescript
import { dataOciOsubBillingScheduleBillingSchedules } from 'rhizo-co-terraform-provider-oci'

new dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList.get"></a>

```typescript
public get(index: number): DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference <a name="DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.Initializer"></a>

```typescript
import { dataOciOsubBillingScheduleBillingSchedules } from 'rhizo-co-terraform-provider-oci'

new dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.property.partNumber">partNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProduct">DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProduct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `partNumber`<sup>Required</sup> <a name="partNumber" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.property.partNumber"></a>

```typescript
public readonly partNumber: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProduct;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProduct">DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProduct</a>

---


### DataOciOsubBillingScheduleBillingSchedulesFilterList <a name="DataOciOsubBillingScheduleBillingSchedulesFilterList" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterList.Initializer"></a>

```typescript
import { dataOciOsubBillingScheduleBillingSchedules } from 'rhizo-co-terraform-provider-oci'

new dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterList.get"></a>

```typescript
public get(index: number): DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilter">DataOciOsubBillingScheduleBillingSchedulesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciOsubBillingScheduleBillingSchedulesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilter">DataOciOsubBillingScheduleBillingSchedulesFilter</a>[]

---


### DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference <a name="DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.Initializer"></a>

```typescript
import { dataOciOsubBillingScheduleBillingSchedules } from 'rhizo-co-terraform-provider-oci'

new dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilter">DataOciOsubBillingScheduleBillingSchedulesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciOsubBillingScheduleBillingSchedulesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilter">DataOciOsubBillingScheduleBillingSchedulesFilter</a>

---



