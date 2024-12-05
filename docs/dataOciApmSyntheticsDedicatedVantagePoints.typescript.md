# `dataOciApmSyntheticsDedicatedVantagePoints` Submodule <a name="`dataOciApmSyntheticsDedicatedVantagePoints` Submodule" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciApmSyntheticsDedicatedVantagePoints <a name="DataOciApmSyntheticsDedicatedVantagePoints" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_dedicated_vantage_points oci_apm_synthetics_dedicated_vantage_points}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.Initializer"></a>

```typescript
import { dataOciApmSyntheticsDedicatedVantagePoints } from 'rhizo-co-terraform-provider-oci'

new dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints(scope: Construct, id: string, config: DataOciApmSyntheticsDedicatedVantagePointsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsConfig">DataOciApmSyntheticsDedicatedVantagePointsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsConfig">DataOciApmSyntheticsDedicatedVantagePointsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.resetName">resetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciApmSyntheticsDedicatedVantagePointsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilter">DataOciApmSyntheticsDedicatedVantagePointsFilter</a>[]

---

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.resetName"></a>

```typescript
public resetName(): void
```

##### `resetStatus` <a name="resetStatus" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.resetStatus"></a>

```typescript
public resetStatus(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciApmSyntheticsDedicatedVantagePoints resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.isConstruct"></a>

```typescript
import { dataOciApmSyntheticsDedicatedVantagePoints } from 'rhizo-co-terraform-provider-oci'

dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.isTerraformElement"></a>

```typescript
import { dataOciApmSyntheticsDedicatedVantagePoints } from 'rhizo-co-terraform-provider-oci'

dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.isTerraformDataSource"></a>

```typescript
import { dataOciApmSyntheticsDedicatedVantagePoints } from 'rhizo-co-terraform-provider-oci'

dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.generateConfigForImport"></a>

```typescript
import { dataOciApmSyntheticsDedicatedVantagePoints } from 'rhizo-co-terraform-provider-oci'

dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciApmSyntheticsDedicatedVantagePoints resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciApmSyntheticsDedicatedVantagePoints to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciApmSyntheticsDedicatedVantagePoints that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_dedicated_vantage_points#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciApmSyntheticsDedicatedVantagePoints to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.dedicatedVantagePointCollection">dedicatedVantagePointCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList">DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterList">DataOciApmSyntheticsDedicatedVantagePointsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.apmDomainIdInput">apmDomainIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilter">DataOciApmSyntheticsDedicatedVantagePointsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.apmDomainId">apmDomainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.status">status</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `dedicatedVantagePointCollection`<sup>Required</sup> <a name="dedicatedVantagePointCollection" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.dedicatedVantagePointCollection"></a>

```typescript
public readonly dedicatedVantagePointCollection: DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList">DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.filter"></a>

```typescript
public readonly filter: DataOciApmSyntheticsDedicatedVantagePointsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterList">DataOciApmSyntheticsDedicatedVantagePointsFilterList</a>

---

##### `apmDomainIdInput`<sup>Optional</sup> <a name="apmDomainIdInput" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.apmDomainIdInput"></a>

```typescript
public readonly apmDomainIdInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciApmSyntheticsDedicatedVantagePointsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilter">DataOciApmSyntheticsDedicatedVantagePointsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `apmDomainId`<sup>Required</sup> <a name="apmDomainId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.apmDomainId"></a>

```typescript
public readonly apmDomainId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePoints.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciApmSyntheticsDedicatedVantagePointsConfig <a name="DataOciApmSyntheticsDedicatedVantagePointsConfig" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsConfig.Initializer"></a>

```typescript
import { dataOciApmSyntheticsDedicatedVantagePoints } from 'rhizo-co-terraform-provider-oci'

const dataOciApmSyntheticsDedicatedVantagePointsConfig: dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsConfig.property.apmDomainId">apmDomainId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_dedicated_vantage_points#apm_domain_id DataOciApmSyntheticsDedicatedVantagePoints#apm_domain_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_dedicated_vantage_points#display_name DataOciApmSyntheticsDedicatedVantagePoints#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilter">DataOciApmSyntheticsDedicatedVantagePointsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_dedicated_vantage_points#id DataOciApmSyntheticsDedicatedVantagePoints#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_dedicated_vantage_points#name DataOciApmSyntheticsDedicatedVantagePoints#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsConfig.property.status">status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_dedicated_vantage_points#status DataOciApmSyntheticsDedicatedVantagePoints#status}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `apmDomainId`<sup>Required</sup> <a name="apmDomainId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsConfig.property.apmDomainId"></a>

```typescript
public readonly apmDomainId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_dedicated_vantage_points#apm_domain_id DataOciApmSyntheticsDedicatedVantagePoints#apm_domain_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_dedicated_vantage_points#display_name DataOciApmSyntheticsDedicatedVantagePoints#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciApmSyntheticsDedicatedVantagePointsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilter">DataOciApmSyntheticsDedicatedVantagePointsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_dedicated_vantage_points#filter DataOciApmSyntheticsDedicatedVantagePoints#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_dedicated_vantage_points#id DataOciApmSyntheticsDedicatedVantagePoints#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_dedicated_vantage_points#name DataOciApmSyntheticsDedicatedVantagePoints#name}.

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_dedicated_vantage_points#status DataOciApmSyntheticsDedicatedVantagePoints#status}.

---

### DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollection <a name="DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollection" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollection.Initializer"></a>

```typescript
import { dataOciApmSyntheticsDedicatedVantagePoints } from 'rhizo-co-terraform-provider-oci'

const dataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollection: dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollection = { ... }
```


### DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItems <a name="DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItems.Initializer"></a>

```typescript
import { dataOciApmSyntheticsDedicatedVantagePoints } from 'rhizo-co-terraform-provider-oci'

const dataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItems: dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItems = { ... }
```


### DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetails <a name="DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetails" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetails.Initializer"></a>

```typescript
import { dataOciApmSyntheticsDedicatedVantagePoints } from 'rhizo-co-terraform-provider-oci'

const dataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetails: dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetails = { ... }
```


### DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMap <a name="DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMap" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMap"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMap.Initializer"></a>

```typescript
import { dataOciApmSyntheticsDedicatedVantagePoints } from 'rhizo-co-terraform-provider-oci'

const dataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMap: dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMap = { ... }
```


### DataOciApmSyntheticsDedicatedVantagePointsFilter <a name="DataOciApmSyntheticsDedicatedVantagePointsFilter" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilter.Initializer"></a>

```typescript
import { dataOciApmSyntheticsDedicatedVantagePoints } from 'rhizo-co-terraform-provider-oci'

const dataOciApmSyntheticsDedicatedVantagePointsFilter: dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_dedicated_vantage_points#name DataOciApmSyntheticsDedicatedVantagePoints#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_dedicated_vantage_points#values DataOciApmSyntheticsDedicatedVantagePoints#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_dedicated_vantage_points#regex DataOciApmSyntheticsDedicatedVantagePoints#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_dedicated_vantage_points#name DataOciApmSyntheticsDedicatedVantagePoints#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_dedicated_vantage_points#values DataOciApmSyntheticsDedicatedVantagePoints#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_dedicated_vantage_points#regex DataOciApmSyntheticsDedicatedVantagePoints#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList <a name="DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList.Initializer"></a>

```typescript
import { dataOciApmSyntheticsDedicatedVantagePoints } from 'rhizo-co-terraform-provider-oci'

new dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList.get"></a>

```typescript
public get(index: number): DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference <a name="DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciApmSyntheticsDedicatedVantagePoints } from 'rhizo-co-terraform-provider-oci'

new dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.property.dvpStackId">dvpStackId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.property.dvpStackType">dvpStackType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.property.dvpStreamId">dvpStreamId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.property.dvpVersion">dvpVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetails">DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dvpStackId`<sup>Required</sup> <a name="dvpStackId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.property.dvpStackId"></a>

```typescript
public readonly dvpStackId: string;
```

- *Type:* string

---

##### `dvpStackType`<sup>Required</sup> <a name="dvpStackType" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.property.dvpStackType"></a>

```typescript
public readonly dvpStackType: string;
```

- *Type:* string

---

##### `dvpStreamId`<sup>Required</sup> <a name="dvpStreamId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.property.dvpStreamId"></a>

```typescript
public readonly dvpStreamId: string;
```

- *Type:* string

---

##### `dvpVersion`<sup>Required</sup> <a name="dvpVersion" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.property.dvpVersion"></a>

```typescript
public readonly dvpVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetails">DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetails</a>

---


### DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList <a name="DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList.Initializer"></a>

```typescript
import { dataOciApmSyntheticsDedicatedVantagePoints } from 'rhizo-co-terraform-provider-oci'

new dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList <a name="DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList.Initializer"></a>

```typescript
import { dataOciApmSyntheticsDedicatedVantagePoints } from 'rhizo-co-terraform-provider-oci'

new dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList.get"></a>

```typescript
public get(index: number): DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference <a name="DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.Initializer"></a>

```typescript
import { dataOciApmSyntheticsDedicatedVantagePoints } from 'rhizo-co-terraform-provider-oci'

new dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.property.disabled">disabled</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.property.enabled">enabled</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.property.invalid">invalid</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.property.total">total</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMap">DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMap</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.property.disabled"></a>

```typescript
public readonly disabled: number;
```

- *Type:* number

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.property.enabled"></a>

```typescript
public readonly enabled: number;
```

- *Type:* number

---

##### `invalid`<sup>Required</sup> <a name="invalid" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.property.invalid"></a>

```typescript
public readonly invalid: number;
```

- *Type:* number

---

##### `total`<sup>Required</sup> <a name="total" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.property.total"></a>

```typescript
public readonly total: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMap;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMap">DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMap</a>

---


### DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference <a name="DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciApmSyntheticsDedicatedVantagePoints } from 'rhizo-co-terraform-provider-oci'

new dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.property.apmDomainId">apmDomainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.property.dvpStackDetails">dvpStackDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList">DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.property.monitorStatusCountMap">monitorStatusCountMap</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList">DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItems">DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apmDomainId`<sup>Required</sup> <a name="apmDomainId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.property.apmDomainId"></a>

```typescript
public readonly apmDomainId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `dvpStackDetails`<sup>Required</sup> <a name="dvpStackDetails" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.property.dvpStackDetails"></a>

```typescript
public readonly dvpStackDetails: DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList">DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsDvpStackDetailsList</a>

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `monitorStatusCountMap`<sup>Required</sup> <a name="monitorStatusCountMap" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.property.monitorStatusCountMap"></a>

```typescript
public readonly monitorStatusCountMap: DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList">DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsMonitorStatusCountMapList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItems">DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItems</a>

---


### DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList <a name="DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList.Initializer"></a>

```typescript
import { dataOciApmSyntheticsDedicatedVantagePoints } from 'rhizo-co-terraform-provider-oci'

new dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList.get"></a>

```typescript
public get(index: number): DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference <a name="DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciApmSyntheticsDedicatedVantagePoints } from 'rhizo-co-terraform-provider-oci'

new dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList">DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollection">DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList">DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollection">DataOciApmSyntheticsDedicatedVantagePointsDedicatedVantagePointCollection</a>

---


### DataOciApmSyntheticsDedicatedVantagePointsFilterList <a name="DataOciApmSyntheticsDedicatedVantagePointsFilterList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterList.Initializer"></a>

```typescript
import { dataOciApmSyntheticsDedicatedVantagePoints } from 'rhizo-co-terraform-provider-oci'

new dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterList.get"></a>

```typescript
public get(index: number): DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilter">DataOciApmSyntheticsDedicatedVantagePointsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciApmSyntheticsDedicatedVantagePointsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilter">DataOciApmSyntheticsDedicatedVantagePointsFilter</a>[]

---


### DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference <a name="DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciApmSyntheticsDedicatedVantagePoints } from 'rhizo-co-terraform-provider-oci'

new dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilter">DataOciApmSyntheticsDedicatedVantagePointsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciApmSyntheticsDedicatedVantagePointsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoints.DataOciApmSyntheticsDedicatedVantagePointsFilter">DataOciApmSyntheticsDedicatedVantagePointsFilter</a>

---



