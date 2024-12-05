# `dataOciMeteringComputationAverageCarbonEmission` Submodule <a name="`dataOciMeteringComputationAverageCarbonEmission` Submodule" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciMeteringComputationAverageCarbonEmission <a name="DataOciMeteringComputationAverageCarbonEmission" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_average_carbon_emission oci_metering_computation_average_carbon_emission}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.Initializer"></a>

```typescript
import { dataOciMeteringComputationAverageCarbonEmission } from 'rhizo-co-terraform-provider-oci'

new dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission(scope: Construct, id: string, config: DataOciMeteringComputationAverageCarbonEmissionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmissionConfig">DataOciMeteringComputationAverageCarbonEmissionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmissionConfig">DataOciMeteringComputationAverageCarbonEmissionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciMeteringComputationAverageCarbonEmission resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.isConstruct"></a>

```typescript
import { dataOciMeteringComputationAverageCarbonEmission } from 'rhizo-co-terraform-provider-oci'

dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.isTerraformElement"></a>

```typescript
import { dataOciMeteringComputationAverageCarbonEmission } from 'rhizo-co-terraform-provider-oci'

dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.isTerraformDataSource"></a>

```typescript
import { dataOciMeteringComputationAverageCarbonEmission } from 'rhizo-co-terraform-provider-oci'

dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.generateConfigForImport"></a>

```typescript
import { dataOciMeteringComputationAverageCarbonEmission } from 'rhizo-co-terraform-provider-oci'

dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciMeteringComputationAverageCarbonEmission resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciMeteringComputationAverageCarbonEmission to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciMeteringComputationAverageCarbonEmission that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_average_carbon_emission#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciMeteringComputationAverageCarbonEmission to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.property.averageCarbonEmission">averageCarbonEmission</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.property.skuPartNumberInput">skuPartNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.property.skuPartNumber">skuPartNumber</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `averageCarbonEmission`<sup>Required</sup> <a name="averageCarbonEmission" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.property.averageCarbonEmission"></a>

```typescript
public readonly averageCarbonEmission: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `skuPartNumberInput`<sup>Optional</sup> <a name="skuPartNumberInput" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.property.skuPartNumberInput"></a>

```typescript
public readonly skuPartNumberInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `skuPartNumber`<sup>Required</sup> <a name="skuPartNumber" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.property.skuPartNumber"></a>

```typescript
public readonly skuPartNumber: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciMeteringComputationAverageCarbonEmissionConfig <a name="DataOciMeteringComputationAverageCarbonEmissionConfig" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmissionConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmissionConfig.Initializer"></a>

```typescript
import { dataOciMeteringComputationAverageCarbonEmission } from 'rhizo-co-terraform-provider-oci'

const dataOciMeteringComputationAverageCarbonEmissionConfig: dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmissionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmissionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmissionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmissionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmissionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmissionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmissionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmissionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmissionConfig.property.skuPartNumber">skuPartNumber</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_average_carbon_emission#sku_part_number DataOciMeteringComputationAverageCarbonEmission#sku_part_number}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmissionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_average_carbon_emission#id DataOciMeteringComputationAverageCarbonEmission#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmissionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmissionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmissionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmissionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmissionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmissionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmissionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `skuPartNumber`<sup>Required</sup> <a name="skuPartNumber" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmissionConfig.property.skuPartNumber"></a>

```typescript
public readonly skuPartNumber: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_average_carbon_emission#sku_part_number DataOciMeteringComputationAverageCarbonEmission#sku_part_number}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmissionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_average_carbon_emission#id DataOciMeteringComputationAverageCarbonEmission#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



