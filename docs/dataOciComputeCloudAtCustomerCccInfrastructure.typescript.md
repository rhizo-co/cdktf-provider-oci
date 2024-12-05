# `dataOciComputeCloudAtCustomerCccInfrastructure` Submodule <a name="`dataOciComputeCloudAtCustomerCccInfrastructure` Submodule" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciComputeCloudAtCustomerCccInfrastructure <a name="DataOciComputeCloudAtCustomerCccInfrastructure" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructure oci_compute_cloud_at_customer_ccc_infrastructure}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.Initializer"></a>

```typescript
import { dataOciComputeCloudAtCustomerCccInfrastructure } from 'rhizo-co-terraform-provider-oci'

new dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure(scope: Construct, id: string, config: DataOciComputeCloudAtCustomerCccInfrastructureConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureConfig">DataOciComputeCloudAtCustomerCccInfrastructureConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureConfig">DataOciComputeCloudAtCustomerCccInfrastructureConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciComputeCloudAtCustomerCccInfrastructure resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.isConstruct"></a>

```typescript
import { dataOciComputeCloudAtCustomerCccInfrastructure } from 'rhizo-co-terraform-provider-oci'

dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.isTerraformElement"></a>

```typescript
import { dataOciComputeCloudAtCustomerCccInfrastructure } from 'rhizo-co-terraform-provider-oci'

dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.isTerraformDataSource"></a>

```typescript
import { dataOciComputeCloudAtCustomerCccInfrastructure } from 'rhizo-co-terraform-provider-oci'

dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.generateConfigForImport"></a>

```typescript
import { dataOciComputeCloudAtCustomerCccInfrastructure } from 'rhizo-co-terraform-provider-oci'

dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciComputeCloudAtCustomerCccInfrastructure resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciComputeCloudAtCustomerCccInfrastructure to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciComputeCloudAtCustomerCccInfrastructure that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructure#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciComputeCloudAtCustomerCccInfrastructure to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.cccUpgradeScheduleId">cccUpgradeScheduleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.connectionDetails">connectionDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.connectionState">connectionState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.infrastructureInventory">infrastructureInventory</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList">DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.infrastructureNetworkConfiguration">infrastructureNetworkConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList">DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.provisioningFingerprint">provisioningFingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.provisioningPin">provisioningPin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.shortName">shortName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.upgradeInformation">upgradeInformation</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList">DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.cccInfrastructureIdInput">cccInfrastructureIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.cccInfrastructureId">cccInfrastructureId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `cccUpgradeScheduleId`<sup>Required</sup> <a name="cccUpgradeScheduleId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.cccUpgradeScheduleId"></a>

```typescript
public readonly cccUpgradeScheduleId: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `connectionDetails`<sup>Required</sup> <a name="connectionDetails" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.connectionDetails"></a>

```typescript
public readonly connectionDetails: string;
```

- *Type:* string

---

##### `connectionState`<sup>Required</sup> <a name="connectionState" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.connectionState"></a>

```typescript
public readonly connectionState: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `infrastructureInventory`<sup>Required</sup> <a name="infrastructureInventory" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.infrastructureInventory"></a>

```typescript
public readonly infrastructureInventory: DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList">DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList</a>

---

##### `infrastructureNetworkConfiguration`<sup>Required</sup> <a name="infrastructureNetworkConfiguration" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.infrastructureNetworkConfiguration"></a>

```typescript
public readonly infrastructureNetworkConfiguration: DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList">DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList</a>

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `provisioningFingerprint`<sup>Required</sup> <a name="provisioningFingerprint" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.provisioningFingerprint"></a>

```typescript
public readonly provisioningFingerprint: string;
```

- *Type:* string

---

##### `provisioningPin`<sup>Required</sup> <a name="provisioningPin" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.provisioningPin"></a>

```typescript
public readonly provisioningPin: string;
```

- *Type:* string

---

##### `shortName`<sup>Required</sup> <a name="shortName" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.shortName"></a>

```typescript
public readonly shortName: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `upgradeInformation`<sup>Required</sup> <a name="upgradeInformation" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.upgradeInformation"></a>

```typescript
public readonly upgradeInformation: DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList">DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList</a>

---

##### `cccInfrastructureIdInput`<sup>Optional</sup> <a name="cccInfrastructureIdInput" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.cccInfrastructureIdInput"></a>

```typescript
public readonly cccInfrastructureIdInput: string;
```

- *Type:* string

---

##### `cccInfrastructureId`<sup>Required</sup> <a name="cccInfrastructureId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.cccInfrastructureId"></a>

```typescript
public readonly cccInfrastructureId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciComputeCloudAtCustomerCccInfrastructureConfig <a name="DataOciComputeCloudAtCustomerCccInfrastructureConfig" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureConfig.Initializer"></a>

```typescript
import { dataOciComputeCloudAtCustomerCccInfrastructure } from 'rhizo-co-terraform-provider-oci'

const dataOciComputeCloudAtCustomerCccInfrastructureConfig: dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureConfig.property.cccInfrastructureId">cccInfrastructureId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructure#ccc_infrastructure_id DataOciComputeCloudAtCustomerCccInfrastructure#ccc_infrastructure_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `cccInfrastructureId`<sup>Required</sup> <a name="cccInfrastructureId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureConfig.property.cccInfrastructureId"></a>

```typescript
public readonly cccInfrastructureId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructure#ccc_infrastructure_id DataOciComputeCloudAtCustomerCccInfrastructure#ccc_infrastructure_id}.

---

### DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventory <a name="DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventory" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventory"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventory.Initializer"></a>

```typescript
import { dataOciComputeCloudAtCustomerCccInfrastructure } from 'rhizo-co-terraform-provider-oci'

const dataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventory: dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventory = { ... }
```


### DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfiguration <a name="DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfiguration" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfiguration.Initializer"></a>

```typescript
import { dataOciComputeCloudAtCustomerCccInfrastructure } from 'rhizo-co-terraform-provider-oci'

const dataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfiguration: dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfiguration = { ... }
```


### DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamic <a name="DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamic" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamic"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamic.Initializer"></a>

```typescript
import { dataOciComputeCloudAtCustomerCccInfrastructure } from 'rhizo-co-terraform-provider-oci'

const dataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamic: dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamic = { ... }
```


### DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformation <a name="DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformation" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformation.Initializer"></a>

```typescript
import { dataOciComputeCloudAtCustomerCccInfrastructure } from 'rhizo-co-terraform-provider-oci'

const dataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformation: dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformation = { ... }
```


### DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStatic <a name="DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStatic" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStatic"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStatic.Initializer"></a>

```typescript
import { dataOciComputeCloudAtCustomerCccInfrastructure } from 'rhizo-co-terraform-provider-oci'

const dataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStatic: dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStatic = { ... }
```


### DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodes <a name="DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodes" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodes.Initializer"></a>

```typescript
import { dataOciComputeCloudAtCustomerCccInfrastructure } from 'rhizo-co-terraform-provider-oci'

const dataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodes: dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodes = { ... }
```


### DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformation <a name="DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformation" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformation.Initializer"></a>

```typescript
import { dataOciComputeCloudAtCustomerCccInfrastructure } from 'rhizo-co-terraform-provider-oci'

const dataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformation: dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformation = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList <a name="DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList.Initializer"></a>

```typescript
import { dataOciComputeCloudAtCustomerCccInfrastructure } from 'rhizo-co-terraform-provider-oci'

new dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList.get"></a>

```typescript
public get(index: number): DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference <a name="DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.Initializer"></a>

```typescript
import { dataOciComputeCloudAtCustomerCccInfrastructure } from 'rhizo-co-terraform-provider-oci'

new dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.property.capacityStorageTrayCount">capacityStorageTrayCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.property.computeNodeCount">computeNodeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.property.managementNodeCount">managementNodeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.property.performanceStorageTrayCount">performanceStorageTrayCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.property.serialNumber">serialNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventory">DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventory</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `capacityStorageTrayCount`<sup>Required</sup> <a name="capacityStorageTrayCount" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.property.capacityStorageTrayCount"></a>

```typescript
public readonly capacityStorageTrayCount: number;
```

- *Type:* number

---

##### `computeNodeCount`<sup>Required</sup> <a name="computeNodeCount" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.property.computeNodeCount"></a>

```typescript
public readonly computeNodeCount: number;
```

- *Type:* number

---

##### `managementNodeCount`<sup>Required</sup> <a name="managementNodeCount" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.property.managementNodeCount"></a>

```typescript
public readonly managementNodeCount: number;
```

- *Type:* number

---

##### `performanceStorageTrayCount`<sup>Required</sup> <a name="performanceStorageTrayCount" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.property.performanceStorageTrayCount"></a>

```typescript
public readonly performanceStorageTrayCount: number;
```

- *Type:* number

---

##### `serialNumber`<sup>Required</sup> <a name="serialNumber" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.property.serialNumber"></a>

```typescript
public readonly serialNumber: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventory;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventory">DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventory</a>

---


### DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList <a name="DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.Initializer"></a>

```typescript
import { dataOciComputeCloudAtCustomerCccInfrastructure } from 'rhizo-co-terraform-provider-oci'

new dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.get"></a>

```typescript
public get(index: number): DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference <a name="DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.Initializer"></a>

```typescript
import { dataOciComputeCloudAtCustomerCccInfrastructure } from 'rhizo-co-terraform-provider-oci'

new dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.property.bgpTopology">bgpTopology</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.property.oracleAsn">oracleAsn</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.property.peerInformation">peerInformation</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList">DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamic">DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamic</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bgpTopology`<sup>Required</sup> <a name="bgpTopology" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.property.bgpTopology"></a>

```typescript
public readonly bgpTopology: string;
```

- *Type:* string

---

##### `oracleAsn`<sup>Required</sup> <a name="oracleAsn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.property.oracleAsn"></a>

```typescript
public readonly oracleAsn: number;
```

- *Type:* number

---

##### `peerInformation`<sup>Required</sup> <a name="peerInformation" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.property.peerInformation"></a>

```typescript
public readonly peerInformation: DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList">DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamic;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamic">DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamic</a>

---


### DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList <a name="DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.Initializer"></a>

```typescript
import { dataOciComputeCloudAtCustomerCccInfrastructure } from 'rhizo-co-terraform-provider-oci'

new dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.get"></a>

```typescript
public get(index: number): DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference <a name="DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.Initializer"></a>

```typescript
import { dataOciComputeCloudAtCustomerCccInfrastructure } from 'rhizo-co-terraform-provider-oci'

new dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.property.asn">asn</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.property.ip">ip</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformation">DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `asn`<sup>Required</sup> <a name="asn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.property.asn"></a>

```typescript
public readonly asn: number;
```

- *Type:* number

---

##### `ip`<sup>Required</sup> <a name="ip" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.property.ip"></a>

```typescript
public readonly ip: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformation;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformation">DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformation</a>

---


### DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList <a name="DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.Initializer"></a>

```typescript
import { dataOciComputeCloudAtCustomerCccInfrastructure } from 'rhizo-co-terraform-provider-oci'

new dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.get"></a>

```typescript
public get(index: number): DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference <a name="DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.Initializer"></a>

```typescript
import { dataOciComputeCloudAtCustomerCccInfrastructure } from 'rhizo-co-terraform-provider-oci'

new dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.property.uplinkHsrpGroup">uplinkHsrpGroup</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.property.uplinkVlan">uplinkVlan</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStatic">DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStatic</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `uplinkHsrpGroup`<sup>Required</sup> <a name="uplinkHsrpGroup" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.property.uplinkHsrpGroup"></a>

```typescript
public readonly uplinkHsrpGroup: number;
```

- *Type:* number

---

##### `uplinkVlan`<sup>Required</sup> <a name="uplinkVlan" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.property.uplinkVlan"></a>

```typescript
public readonly uplinkVlan: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStatic;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStatic">DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStatic</a>

---


### DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList <a name="DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList.Initializer"></a>

```typescript
import { dataOciComputeCloudAtCustomerCccInfrastructure } from 'rhizo-co-terraform-provider-oci'

new dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList.get"></a>

```typescript
public get(index: number): DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList <a name="DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList.Initializer"></a>

```typescript
import { dataOciComputeCloudAtCustomerCccInfrastructure } from 'rhizo-co-terraform-provider-oci'

new dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList.get"></a>

```typescript
public get(index: number): DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference <a name="DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.Initializer"></a>

```typescript
import { dataOciComputeCloudAtCustomerCccInfrastructure } from 'rhizo-co-terraform-provider-oci'

new dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.property.ip">ip</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodes">DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `ip`<sup>Required</sup> <a name="ip" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.property.ip"></a>

```typescript
public readonly ip: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodes;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodes">DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodes</a>

---


### DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference <a name="DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.Initializer"></a>

```typescript
import { dataOciComputeCloudAtCustomerCccInfrastructure } from 'rhizo-co-terraform-provider-oci'

new dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.dnsIps">dnsIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.infrastructureRoutingDynamic">infrastructureRoutingDynamic</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList">DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.infrastructureRoutingStatic">infrastructureRoutingStatic</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList">DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.managementNodes">managementNodes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList">DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.mgmtVipHostname">mgmtVipHostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.mgmtVipIp">mgmtVipIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.spineIps">spineIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.spineVip">spineVip</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.uplinkDomain">uplinkDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.uplinkGatewayIp">uplinkGatewayIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.uplinkNetmask">uplinkNetmask</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.uplinkPortCount">uplinkPortCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.uplinkPortForwardErrorCorrection">uplinkPortForwardErrorCorrection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.uplinkPortSpeedInGbps">uplinkPortSpeedInGbps</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.uplinkVlanMtu">uplinkVlanMtu</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfiguration">DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dnsIps`<sup>Required</sup> <a name="dnsIps" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.dnsIps"></a>

```typescript
public readonly dnsIps: string[];
```

- *Type:* string[]

---

##### `infrastructureRoutingDynamic`<sup>Required</sup> <a name="infrastructureRoutingDynamic" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.infrastructureRoutingDynamic"></a>

```typescript
public readonly infrastructureRoutingDynamic: DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList">DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList</a>

---

##### `infrastructureRoutingStatic`<sup>Required</sup> <a name="infrastructureRoutingStatic" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.infrastructureRoutingStatic"></a>

```typescript
public readonly infrastructureRoutingStatic: DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList">DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList</a>

---

##### `managementNodes`<sup>Required</sup> <a name="managementNodes" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.managementNodes"></a>

```typescript
public readonly managementNodes: DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList">DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList</a>

---

##### `mgmtVipHostname`<sup>Required</sup> <a name="mgmtVipHostname" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.mgmtVipHostname"></a>

```typescript
public readonly mgmtVipHostname: string;
```

- *Type:* string

---

##### `mgmtVipIp`<sup>Required</sup> <a name="mgmtVipIp" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.mgmtVipIp"></a>

```typescript
public readonly mgmtVipIp: string;
```

- *Type:* string

---

##### `spineIps`<sup>Required</sup> <a name="spineIps" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.spineIps"></a>

```typescript
public readonly spineIps: string[];
```

- *Type:* string[]

---

##### `spineVip`<sup>Required</sup> <a name="spineVip" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.spineVip"></a>

```typescript
public readonly spineVip: string;
```

- *Type:* string

---

##### `uplinkDomain`<sup>Required</sup> <a name="uplinkDomain" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.uplinkDomain"></a>

```typescript
public readonly uplinkDomain: string;
```

- *Type:* string

---

##### `uplinkGatewayIp`<sup>Required</sup> <a name="uplinkGatewayIp" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.uplinkGatewayIp"></a>

```typescript
public readonly uplinkGatewayIp: string;
```

- *Type:* string

---

##### `uplinkNetmask`<sup>Required</sup> <a name="uplinkNetmask" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.uplinkNetmask"></a>

```typescript
public readonly uplinkNetmask: string;
```

- *Type:* string

---

##### `uplinkPortCount`<sup>Required</sup> <a name="uplinkPortCount" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.uplinkPortCount"></a>

```typescript
public readonly uplinkPortCount: number;
```

- *Type:* number

---

##### `uplinkPortForwardErrorCorrection`<sup>Required</sup> <a name="uplinkPortForwardErrorCorrection" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.uplinkPortForwardErrorCorrection"></a>

```typescript
public readonly uplinkPortForwardErrorCorrection: string;
```

- *Type:* string

---

##### `uplinkPortSpeedInGbps`<sup>Required</sup> <a name="uplinkPortSpeedInGbps" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.uplinkPortSpeedInGbps"></a>

```typescript
public readonly uplinkPortSpeedInGbps: number;
```

- *Type:* number

---

##### `uplinkVlanMtu`<sup>Required</sup> <a name="uplinkVlanMtu" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.uplinkVlanMtu"></a>

```typescript
public readonly uplinkVlanMtu: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfiguration;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfiguration">DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfiguration</a>

---


### DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList <a name="DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList.Initializer"></a>

```typescript
import { dataOciComputeCloudAtCustomerCccInfrastructure } from 'rhizo-co-terraform-provider-oci'

new dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList.get"></a>

```typescript
public get(index: number): DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference <a name="DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.Initializer"></a>

```typescript
import { dataOciComputeCloudAtCustomerCccInfrastructure } from 'rhizo-co-terraform-provider-oci'

new dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.property.currentVersion">currentVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.property.isActive">isActive</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.property.scheduledUpgradeDuration">scheduledUpgradeDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.property.timeOfScheduledUpgrade">timeOfScheduledUpgrade</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformation">DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `currentVersion`<sup>Required</sup> <a name="currentVersion" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.property.currentVersion"></a>

```typescript
public readonly currentVersion: string;
```

- *Type:* string

---

##### `isActive`<sup>Required</sup> <a name="isActive" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.property.isActive"></a>

```typescript
public readonly isActive: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `scheduledUpgradeDuration`<sup>Required</sup> <a name="scheduledUpgradeDuration" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.property.scheduledUpgradeDuration"></a>

```typescript
public readonly scheduledUpgradeDuration: string;
```

- *Type:* string

---

##### `timeOfScheduledUpgrade`<sup>Required</sup> <a name="timeOfScheduledUpgrade" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.property.timeOfScheduledUpgrade"></a>

```typescript
public readonly timeOfScheduledUpgrade: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformation;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformation">DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformation</a>

---



