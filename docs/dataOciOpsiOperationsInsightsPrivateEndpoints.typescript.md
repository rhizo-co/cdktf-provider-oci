# `dataOciOpsiOperationsInsightsPrivateEndpoints` Submodule <a name="`dataOciOpsiOperationsInsightsPrivateEndpoints` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOpsiOperationsInsightsPrivateEndpoints <a name="DataOciOpsiOperationsInsightsPrivateEndpoints" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_private_endpoints oci_opsi_operations_insights_private_endpoints}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.Initializer"></a>

```typescript
import { dataOciOpsiOperationsInsightsPrivateEndpoints } from 'rhizo-co-terraform-provider-oci'

new dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints(scope: Construct, id: string, config?: DataOciOpsiOperationsInsightsPrivateEndpointsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsConfig">DataOciOpsiOperationsInsightsPrivateEndpointsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsConfig">DataOciOpsiOperationsInsightsPrivateEndpointsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.resetCompartmentIdInSubtree">resetCompartmentIdInSubtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.resetIsUsedForRacDbs">resetIsUsedForRacDbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.resetOpsiPrivateEndpointId">resetOpsiPrivateEndpointId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.resetState">resetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.resetVcnId">resetVcnId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciOpsiOperationsInsightsPrivateEndpointsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilter">DataOciOpsiOperationsInsightsPrivateEndpointsFilter</a>[]

---

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.resetCompartmentId"></a>

```typescript
public resetCompartmentId(): void
```

##### `resetCompartmentIdInSubtree` <a name="resetCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.resetCompartmentIdInSubtree"></a>

```typescript
public resetCompartmentIdInSubtree(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsUsedForRacDbs` <a name="resetIsUsedForRacDbs" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.resetIsUsedForRacDbs"></a>

```typescript
public resetIsUsedForRacDbs(): void
```

##### `resetOpsiPrivateEndpointId` <a name="resetOpsiPrivateEndpointId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.resetOpsiPrivateEndpointId"></a>

```typescript
public resetOpsiPrivateEndpointId(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.resetState"></a>

```typescript
public resetState(): void
```

##### `resetVcnId` <a name="resetVcnId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.resetVcnId"></a>

```typescript
public resetVcnId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOpsiOperationsInsightsPrivateEndpoints resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.isConstruct"></a>

```typescript
import { dataOciOpsiOperationsInsightsPrivateEndpoints } from 'rhizo-co-terraform-provider-oci'

dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.isTerraformElement"></a>

```typescript
import { dataOciOpsiOperationsInsightsPrivateEndpoints } from 'rhizo-co-terraform-provider-oci'

dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.isTerraformDataSource"></a>

```typescript
import { dataOciOpsiOperationsInsightsPrivateEndpoints } from 'rhizo-co-terraform-provider-oci'

dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.generateConfigForImport"></a>

```typescript
import { dataOciOpsiOperationsInsightsPrivateEndpoints } from 'rhizo-co-terraform-provider-oci'

dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciOpsiOperationsInsightsPrivateEndpoints resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciOpsiOperationsInsightsPrivateEndpoints to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciOpsiOperationsInsightsPrivateEndpoints that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_private_endpoints#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOpsiOperationsInsightsPrivateEndpoints to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterList">DataOciOpsiOperationsInsightsPrivateEndpointsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.operationsInsightsPrivateEndpointCollection">operationsInsightsPrivateEndpointCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionList">DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.compartmentIdInSubtreeInput">compartmentIdInSubtreeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilter">DataOciOpsiOperationsInsightsPrivateEndpointsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.isUsedForRacDbsInput">isUsedForRacDbsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.opsiPrivateEndpointIdInput">opsiPrivateEndpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.stateInput">stateInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.vcnIdInput">vcnIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.isUsedForRacDbs">isUsedForRacDbs</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.opsiPrivateEndpointId">opsiPrivateEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.state">state</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.vcnId">vcnId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.filter"></a>

```typescript
public readonly filter: DataOciOpsiOperationsInsightsPrivateEndpointsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterList">DataOciOpsiOperationsInsightsPrivateEndpointsFilterList</a>

---

##### `operationsInsightsPrivateEndpointCollection`<sup>Required</sup> <a name="operationsInsightsPrivateEndpointCollection" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.operationsInsightsPrivateEndpointCollection"></a>

```typescript
public readonly operationsInsightsPrivateEndpointCollection: DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionList">DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `compartmentIdInSubtreeInput`<sup>Optional</sup> <a name="compartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.compartmentIdInSubtreeInput"></a>

```typescript
public readonly compartmentIdInSubtreeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciOpsiOperationsInsightsPrivateEndpointsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilter">DataOciOpsiOperationsInsightsPrivateEndpointsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isUsedForRacDbsInput`<sup>Optional</sup> <a name="isUsedForRacDbsInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.isUsedForRacDbsInput"></a>

```typescript
public readonly isUsedForRacDbsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `opsiPrivateEndpointIdInput`<sup>Optional</sup> <a name="opsiPrivateEndpointIdInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.opsiPrivateEndpointIdInput"></a>

```typescript
public readonly opsiPrivateEndpointIdInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.stateInput"></a>

```typescript
public readonly stateInput: string[];
```

- *Type:* string[]

---

##### `vcnIdInput`<sup>Optional</sup> <a name="vcnIdInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.vcnIdInput"></a>

```typescript
public readonly vcnIdInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `compartmentIdInSubtree`<sup>Required</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.compartmentIdInSubtree"></a>

```typescript
public readonly compartmentIdInSubtree: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isUsedForRacDbs`<sup>Required</sup> <a name="isUsedForRacDbs" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.isUsedForRacDbs"></a>

```typescript
public readonly isUsedForRacDbs: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `opsiPrivateEndpointId`<sup>Required</sup> <a name="opsiPrivateEndpointId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.opsiPrivateEndpointId"></a>

```typescript
public readonly opsiPrivateEndpointId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.state"></a>

```typescript
public readonly state: string[];
```

- *Type:* string[]

---

##### `vcnId`<sup>Required</sup> <a name="vcnId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.vcnId"></a>

```typescript
public readonly vcnId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpoints.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOpsiOperationsInsightsPrivateEndpointsConfig <a name="DataOciOpsiOperationsInsightsPrivateEndpointsConfig" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsConfig.Initializer"></a>

```typescript
import { dataOciOpsiOperationsInsightsPrivateEndpoints } from 'rhizo-co-terraform-provider-oci'

const dataOciOpsiOperationsInsightsPrivateEndpointsConfig: dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_private_endpoints#compartment_id DataOciOpsiOperationsInsightsPrivateEndpoints#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsConfig.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_private_endpoints#compartment_id_in_subtree DataOciOpsiOperationsInsightsPrivateEndpoints#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_private_endpoints#display_name DataOciOpsiOperationsInsightsPrivateEndpoints#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilter">DataOciOpsiOperationsInsightsPrivateEndpointsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_private_endpoints#id DataOciOpsiOperationsInsightsPrivateEndpoints#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsConfig.property.isUsedForRacDbs">isUsedForRacDbs</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_private_endpoints#is_used_for_rac_dbs DataOciOpsiOperationsInsightsPrivateEndpoints#is_used_for_rac_dbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsConfig.property.opsiPrivateEndpointId">opsiPrivateEndpointId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_private_endpoints#opsi_private_endpoint_id DataOciOpsiOperationsInsightsPrivateEndpoints#opsi_private_endpoint_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsConfig.property.state">state</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_private_endpoints#state DataOciOpsiOperationsInsightsPrivateEndpoints#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsConfig.property.vcnId">vcnId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_private_endpoints#vcn_id DataOciOpsiOperationsInsightsPrivateEndpoints#vcn_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_private_endpoints#compartment_id DataOciOpsiOperationsInsightsPrivateEndpoints#compartment_id}.

---

##### `compartmentIdInSubtree`<sup>Optional</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsConfig.property.compartmentIdInSubtree"></a>

```typescript
public readonly compartmentIdInSubtree: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_private_endpoints#compartment_id_in_subtree DataOciOpsiOperationsInsightsPrivateEndpoints#compartment_id_in_subtree}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_private_endpoints#display_name DataOciOpsiOperationsInsightsPrivateEndpoints#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciOpsiOperationsInsightsPrivateEndpointsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilter">DataOciOpsiOperationsInsightsPrivateEndpointsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_private_endpoints#filter DataOciOpsiOperationsInsightsPrivateEndpoints#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_private_endpoints#id DataOciOpsiOperationsInsightsPrivateEndpoints#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isUsedForRacDbs`<sup>Optional</sup> <a name="isUsedForRacDbs" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsConfig.property.isUsedForRacDbs"></a>

```typescript
public readonly isUsedForRacDbs: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_private_endpoints#is_used_for_rac_dbs DataOciOpsiOperationsInsightsPrivateEndpoints#is_used_for_rac_dbs}.

---

##### `opsiPrivateEndpointId`<sup>Optional</sup> <a name="opsiPrivateEndpointId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsConfig.property.opsiPrivateEndpointId"></a>

```typescript
public readonly opsiPrivateEndpointId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_private_endpoints#opsi_private_endpoint_id DataOciOpsiOperationsInsightsPrivateEndpoints#opsi_private_endpoint_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsConfig.property.state"></a>

```typescript
public readonly state: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_private_endpoints#state DataOciOpsiOperationsInsightsPrivateEndpoints#state}.

---

##### `vcnId`<sup>Optional</sup> <a name="vcnId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsConfig.property.vcnId"></a>

```typescript
public readonly vcnId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_private_endpoints#vcn_id DataOciOpsiOperationsInsightsPrivateEndpoints#vcn_id}.

---

### DataOciOpsiOperationsInsightsPrivateEndpointsFilter <a name="DataOciOpsiOperationsInsightsPrivateEndpointsFilter" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilter.Initializer"></a>

```typescript
import { dataOciOpsiOperationsInsightsPrivateEndpoints } from 'rhizo-co-terraform-provider-oci'

const dataOciOpsiOperationsInsightsPrivateEndpointsFilter: dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_private_endpoints#name DataOciOpsiOperationsInsightsPrivateEndpoints#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_private_endpoints#values DataOciOpsiOperationsInsightsPrivateEndpoints#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_private_endpoints#regex DataOciOpsiOperationsInsightsPrivateEndpoints#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_private_endpoints#name DataOciOpsiOperationsInsightsPrivateEndpoints#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_private_endpoints#values DataOciOpsiOperationsInsightsPrivateEndpoints#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_private_endpoints#regex DataOciOpsiOperationsInsightsPrivateEndpoints#regex}.

---

### DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollection <a name="DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollection" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollection.Initializer"></a>

```typescript
import { dataOciOpsiOperationsInsightsPrivateEndpoints } from 'rhizo-co-terraform-provider-oci'

const dataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollection: dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollection = { ... }
```


### DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItems <a name="DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItems.Initializer"></a>

```typescript
import { dataOciOpsiOperationsInsightsPrivateEndpoints } from 'rhizo-co-terraform-provider-oci'

const dataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItems: dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItems = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOpsiOperationsInsightsPrivateEndpointsFilterList <a name="DataOciOpsiOperationsInsightsPrivateEndpointsFilterList" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterList.Initializer"></a>

```typescript
import { dataOciOpsiOperationsInsightsPrivateEndpoints } from 'rhizo-co-terraform-provider-oci'

new dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterList.get"></a>

```typescript
public get(index: number): DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilter">DataOciOpsiOperationsInsightsPrivateEndpointsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciOpsiOperationsInsightsPrivateEndpointsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilter">DataOciOpsiOperationsInsightsPrivateEndpointsFilter</a>[]

---


### DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference <a name="DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciOpsiOperationsInsightsPrivateEndpoints } from 'rhizo-co-terraform-provider-oci'

new dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilter">DataOciOpsiOperationsInsightsPrivateEndpointsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciOpsiOperationsInsightsPrivateEndpointsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsFilter">DataOciOpsiOperationsInsightsPrivateEndpointsFilter</a>

---


### DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsList <a name="DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsList.Initializer"></a>

```typescript
import { dataOciOpsiOperationsInsightsPrivateEndpoints } from 'rhizo-co-terraform-provider-oci'

new dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference <a name="DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciOpsiOperationsInsightsPrivateEndpoints } from 'rhizo-co-terraform-provider-oci'

new dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.property.isUsedForRacDbs">isUsedForRacDbs</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.property.nsgIds">nsgIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.property.privateEndpointStatusDetails">privateEndpointStatusDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.property.privateIp">privateIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.property.vcnId">vcnId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItems">DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isUsedForRacDbs`<sup>Required</sup> <a name="isUsedForRacDbs" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.property.isUsedForRacDbs"></a>

```typescript
public readonly isUsedForRacDbs: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `nsgIds`<sup>Required</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.property.nsgIds"></a>

```typescript
public readonly nsgIds: string[];
```

- *Type:* string[]

---

##### `privateEndpointStatusDetails`<sup>Required</sup> <a name="privateEndpointStatusDetails" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.property.privateEndpointStatusDetails"></a>

```typescript
public readonly privateEndpointStatusDetails: string;
```

- *Type:* string

---

##### `privateIp`<sup>Required</sup> <a name="privateIp" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.property.privateIp"></a>

```typescript
public readonly privateIp: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `vcnId`<sup>Required</sup> <a name="vcnId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.property.vcnId"></a>

```typescript
public readonly vcnId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItems">DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItems</a>

---


### DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionList <a name="DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionList.Initializer"></a>

```typescript
import { dataOciOpsiOperationsInsightsPrivateEndpoints } from 'rhizo-co-terraform-provider-oci'

new dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionList.get"></a>

```typescript
public get(index: number): DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionOutputReference <a name="DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciOpsiOperationsInsightsPrivateEndpoints } from 'rhizo-co-terraform-provider-oci'

new dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsList">DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollection">DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsList">DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoints.DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollection">DataOciOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollection</a>

---



