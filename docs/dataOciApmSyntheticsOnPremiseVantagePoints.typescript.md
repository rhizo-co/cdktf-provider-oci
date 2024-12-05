# `dataOciApmSyntheticsOnPremiseVantagePoints` Submodule <a name="`dataOciApmSyntheticsOnPremiseVantagePoints` Submodule" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciApmSyntheticsOnPremiseVantagePoints <a name="DataOciApmSyntheticsOnPremiseVantagePoints" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_on_premise_vantage_points oci_apm_synthetics_on_premise_vantage_points}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.Initializer"></a>

```typescript
import { dataOciApmSyntheticsOnPremiseVantagePoints } from 'rhizo-co-terraform-provider-oci'

new dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints(scope: Construct, id: string, config: DataOciApmSyntheticsOnPremiseVantagePointsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsConfig">DataOciApmSyntheticsOnPremiseVantagePointsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsConfig">DataOciApmSyntheticsOnPremiseVantagePointsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.resetName">resetName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciApmSyntheticsOnPremiseVantagePointsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilter">DataOciApmSyntheticsOnPremiseVantagePointsFilter</a>[]

---

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.resetName"></a>

```typescript
public resetName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciApmSyntheticsOnPremiseVantagePoints resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.isConstruct"></a>

```typescript
import { dataOciApmSyntheticsOnPremiseVantagePoints } from 'rhizo-co-terraform-provider-oci'

dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.isTerraformElement"></a>

```typescript
import { dataOciApmSyntheticsOnPremiseVantagePoints } from 'rhizo-co-terraform-provider-oci'

dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.isTerraformDataSource"></a>

```typescript
import { dataOciApmSyntheticsOnPremiseVantagePoints } from 'rhizo-co-terraform-provider-oci'

dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.generateConfigForImport"></a>

```typescript
import { dataOciApmSyntheticsOnPremiseVantagePoints } from 'rhizo-co-terraform-provider-oci'

dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciApmSyntheticsOnPremiseVantagePoints resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciApmSyntheticsOnPremiseVantagePoints to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciApmSyntheticsOnPremiseVantagePoints that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_on_premise_vantage_points#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciApmSyntheticsOnPremiseVantagePoints to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterList">DataOciApmSyntheticsOnPremiseVantagePointsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.onPremiseVantagePointCollection">onPremiseVantagePointCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionList">DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.apmDomainIdInput">apmDomainIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilter">DataOciApmSyntheticsOnPremiseVantagePointsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.apmDomainId">apmDomainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.filter"></a>

```typescript
public readonly filter: DataOciApmSyntheticsOnPremiseVantagePointsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterList">DataOciApmSyntheticsOnPremiseVantagePointsFilterList</a>

---

##### `onPremiseVantagePointCollection`<sup>Required</sup> <a name="onPremiseVantagePointCollection" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.onPremiseVantagePointCollection"></a>

```typescript
public readonly onPremiseVantagePointCollection: DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionList">DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionList</a>

---

##### `apmDomainIdInput`<sup>Optional</sup> <a name="apmDomainIdInput" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.apmDomainIdInput"></a>

```typescript
public readonly apmDomainIdInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciApmSyntheticsOnPremiseVantagePointsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilter">DataOciApmSyntheticsOnPremiseVantagePointsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `apmDomainId`<sup>Required</sup> <a name="apmDomainId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.apmDomainId"></a>

```typescript
public readonly apmDomainId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePoints.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciApmSyntheticsOnPremiseVantagePointsConfig <a name="DataOciApmSyntheticsOnPremiseVantagePointsConfig" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsConfig.Initializer"></a>

```typescript
import { dataOciApmSyntheticsOnPremiseVantagePoints } from 'rhizo-co-terraform-provider-oci'

const dataOciApmSyntheticsOnPremiseVantagePointsConfig: dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsConfig.property.apmDomainId">apmDomainId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_on_premise_vantage_points#apm_domain_id DataOciApmSyntheticsOnPremiseVantagePoints#apm_domain_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_on_premise_vantage_points#display_name DataOciApmSyntheticsOnPremiseVantagePoints#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilter">DataOciApmSyntheticsOnPremiseVantagePointsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_on_premise_vantage_points#id DataOciApmSyntheticsOnPremiseVantagePoints#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_on_premise_vantage_points#name DataOciApmSyntheticsOnPremiseVantagePoints#name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `apmDomainId`<sup>Required</sup> <a name="apmDomainId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsConfig.property.apmDomainId"></a>

```typescript
public readonly apmDomainId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_on_premise_vantage_points#apm_domain_id DataOciApmSyntheticsOnPremiseVantagePoints#apm_domain_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_on_premise_vantage_points#display_name DataOciApmSyntheticsOnPremiseVantagePoints#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciApmSyntheticsOnPremiseVantagePointsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilter">DataOciApmSyntheticsOnPremiseVantagePointsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_on_premise_vantage_points#filter DataOciApmSyntheticsOnPremiseVantagePoints#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_on_premise_vantage_points#id DataOciApmSyntheticsOnPremiseVantagePoints#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_on_premise_vantage_points#name DataOciApmSyntheticsOnPremiseVantagePoints#name}.

---

### DataOciApmSyntheticsOnPremiseVantagePointsFilter <a name="DataOciApmSyntheticsOnPremiseVantagePointsFilter" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilter.Initializer"></a>

```typescript
import { dataOciApmSyntheticsOnPremiseVantagePoints } from 'rhizo-co-terraform-provider-oci'

const dataOciApmSyntheticsOnPremiseVantagePointsFilter: dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_on_premise_vantage_points#name DataOciApmSyntheticsOnPremiseVantagePoints#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_on_premise_vantage_points#values DataOciApmSyntheticsOnPremiseVantagePoints#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_on_premise_vantage_points#regex DataOciApmSyntheticsOnPremiseVantagePoints#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_on_premise_vantage_points#name DataOciApmSyntheticsOnPremiseVantagePoints#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_on_premise_vantage_points#values DataOciApmSyntheticsOnPremiseVantagePoints#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_on_premise_vantage_points#regex DataOciApmSyntheticsOnPremiseVantagePoints#regex}.

---

### DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollection <a name="DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollection" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollection.Initializer"></a>

```typescript
import { dataOciApmSyntheticsOnPremiseVantagePoints } from 'rhizo-co-terraform-provider-oci'

const dataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollection: dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollection = { ... }
```


### DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItems <a name="DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItems.Initializer"></a>

```typescript
import { dataOciApmSyntheticsOnPremiseVantagePoints } from 'rhizo-co-terraform-provider-oci'

const dataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItems: dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItems = { ... }
```


### DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummary <a name="DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummary" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummary"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummary.Initializer"></a>

```typescript
import { dataOciApmSyntheticsOnPremiseVantagePoints } from 'rhizo-co-terraform-provider-oci'

const dataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummary: dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummary = { ... }
```


### DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilities <a name="DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilities" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilities"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilities.Initializer"></a>

```typescript
import { dataOciApmSyntheticsOnPremiseVantagePoints } from 'rhizo-co-terraform-provider-oci'

const dataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilities: dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilities = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciApmSyntheticsOnPremiseVantagePointsFilterList <a name="DataOciApmSyntheticsOnPremiseVantagePointsFilterList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterList.Initializer"></a>

```typescript
import { dataOciApmSyntheticsOnPremiseVantagePoints } from 'rhizo-co-terraform-provider-oci'

new dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterList.get"></a>

```typescript
public get(index: number): DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilter">DataOciApmSyntheticsOnPremiseVantagePointsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciApmSyntheticsOnPremiseVantagePointsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilter">DataOciApmSyntheticsOnPremiseVantagePointsFilter</a>[]

---


### DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference <a name="DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciApmSyntheticsOnPremiseVantagePoints } from 'rhizo-co-terraform-provider-oci'

new dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilter">DataOciApmSyntheticsOnPremiseVantagePointsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciApmSyntheticsOnPremiseVantagePointsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsFilter">DataOciApmSyntheticsOnPremiseVantagePointsFilter</a>

---


### DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsList <a name="DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsList.Initializer"></a>

```typescript
import { dataOciApmSyntheticsOnPremiseVantagePoints } from 'rhizo-co-terraform-provider-oci'

new dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference <a name="DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciApmSyntheticsOnPremiseVantagePoints } from 'rhizo-co-terraform-provider-oci'

new dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.property.apmDomainId">apmDomainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.property.workersSummary">workersSummary</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryList">DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItems">DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apmDomainId`<sup>Required</sup> <a name="apmDomainId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.property.apmDomainId"></a>

```typescript
public readonly apmDomainId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `workersSummary`<sup>Required</sup> <a name="workersSummary" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.property.workersSummary"></a>

```typescript
public readonly workersSummary: DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryList">DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItems">DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItems</a>

---


### DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesList <a name="DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesList.Initializer"></a>

```typescript
import { dataOciApmSyntheticsOnPremiseVantagePoints } from 'rhizo-co-terraform-provider-oci'

new dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesList.get"></a>

```typescript
public get(index: number): DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference <a name="DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.Initializer"></a>

```typescript
import { dataOciApmSyntheticsOnPremiseVantagePoints } from 'rhizo-co-terraform-provider-oci'

new dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.property.capability">capability</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.property.onPremiseVantagePointCount">onPremiseVantagePointCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilities">DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilities</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `capability`<sup>Required</sup> <a name="capability" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.property.capability"></a>

```typescript
public readonly capability: string;
```

- *Type:* string

---

##### `onPremiseVantagePointCount`<sup>Required</sup> <a name="onPremiseVantagePointCount" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.property.onPremiseVantagePointCount"></a>

```typescript
public readonly onPremiseVantagePointCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilities;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilities">DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilities</a>

---


### DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryList <a name="DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryList.Initializer"></a>

```typescript
import { dataOciApmSyntheticsOnPremiseVantagePoints } from 'rhizo-co-terraform-provider-oci'

new dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryList.get"></a>

```typescript
public get(index: number): DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference <a name="DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.Initializer"></a>

```typescript
import { dataOciApmSyntheticsOnPremiseVantagePoints } from 'rhizo-co-terraform-provider-oci'

new dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.property.available">available</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.property.availableCapabilities">availableCapabilities</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesList">DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.property.disabled">disabled</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.property.minVersion">minVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.property.total">total</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.property.used">used</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummary">DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummary</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `available`<sup>Required</sup> <a name="available" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.property.available"></a>

```typescript
public readonly available: number;
```

- *Type:* number

---

##### `availableCapabilities`<sup>Required</sup> <a name="availableCapabilities" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.property.availableCapabilities"></a>

```typescript
public readonly availableCapabilities: DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesList">DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryAvailableCapabilitiesList</a>

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.property.disabled"></a>

```typescript
public readonly disabled: number;
```

- *Type:* number

---

##### `minVersion`<sup>Required</sup> <a name="minVersion" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.property.minVersion"></a>

```typescript
public readonly minVersion: string;
```

- *Type:* string

---

##### `total`<sup>Required</sup> <a name="total" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.property.total"></a>

```typescript
public readonly total: number;
```

- *Type:* number

---

##### `used`<sup>Required</sup> <a name="used" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.property.used"></a>

```typescript
public readonly used: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummaryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummary;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummary">DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsWorkersSummary</a>

---


### DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionList <a name="DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionList.Initializer"></a>

```typescript
import { dataOciApmSyntheticsOnPremiseVantagePoints } from 'rhizo-co-terraform-provider-oci'

new dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionList.get"></a>

```typescript
public get(index: number): DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference <a name="DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciApmSyntheticsOnPremiseVantagePoints } from 'rhizo-co-terraform-provider-oci'

new dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsList">DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollection">DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsList">DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePoints.DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollection">DataOciApmSyntheticsOnPremiseVantagePointsOnPremiseVantagePointCollection</a>

---



