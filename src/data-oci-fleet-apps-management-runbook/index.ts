// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_runbook
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciFleetAppsManagementRunbookConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_runbook#id DataOciFleetAppsManagementRunbook#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_runbook#runbook_id DataOciFleetAppsManagementRunbook#runbook_id}
  */
  readonly runbookId: string;
}
export interface DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowSteps {
}

export function dataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsToTerraform(struct?: DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowSteps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowSteps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowSteps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // group_name - computed: true, optional: false, required: false
  public get groupName() {
    return this.getStringAttribute('group_name');
  }

  // step_name - computed: true, optional: false, required: false
  public get stepName() {
    return this.getStringAttribute('step_name');
  }

  // steps - computed: true, optional: false, required: false
  public get steps() {
    return this.getListAttribute('steps');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference {
    return new DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflow {
}

export function dataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowToTerraform(struct?: DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // group_name - computed: true, optional: false, required: false
  public get groupName() {
    return this.getStringAttribute('group_name');
  }

  // steps - computed: true, optional: false, required: false
  private _steps = new DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsList(this, "steps", false);
  public get steps() {
    return this._steps;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference {
    return new DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetails {
}

export function dataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsToTerraform(struct?: DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // workflow - computed: true, optional: false, required: false
  private _workflow = new DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowList(this, "workflow", false);
  public get workflow() {
    return this._workflow;
  }
}

export class DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference {
    return new DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFleetAppsManagementRunbookAssociationsGroupsProperties {
}

export function dataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesToTerraform(struct?: DataOciFleetAppsManagementRunbookAssociationsGroupsProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciFleetAppsManagementRunbookAssociationsGroupsProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetAppsManagementRunbookAssociationsGroupsProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action_on_failure - computed: true, optional: false, required: false
  public get actionOnFailure() {
    return this.getStringAttribute('action_on_failure');
  }

  // condition - computed: true, optional: false, required: false
  public get condition() {
    return this.getStringAttribute('condition');
  }

  // run_on - computed: true, optional: false, required: false
  public get runOn() {
    return this.getStringAttribute('run_on');
  }
}

export class DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference {
    return new DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFleetAppsManagementRunbookAssociationsGroups {
}

export function dataOciFleetAppsManagementRunbookAssociationsGroupsToTerraform(struct?: DataOciFleetAppsManagementRunbookAssociationsGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciFleetAppsManagementRunbookAssociationsGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetAppsManagementRunbookAssociationsGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // properties - computed: true, optional: false, required: false
  private _properties = new DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesList(this, "properties", false);
  public get properties() {
    return this._properties;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataOciFleetAppsManagementRunbookAssociationsGroupsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference {
    return new DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetails {
}

export function dataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsToTerraform(struct?: DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // output_variable_name - computed: true, optional: false, required: false
  public get outputVariableName() {
    return this.getStringAttribute('output_variable_name');
  }

  // step_name - computed: true, optional: false, required: false
  public get stepName() {
    return this.getStringAttribute('step_name');
  }
}

export class DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference {
    return new DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappings {
}

export function dataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsToTerraform(struct?: DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // output_variable_details - computed: true, optional: false, required: false
  private _outputVariableDetails = new DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsList(this, "output_variable_details", false);
  public get outputVariableDetails() {
    return this._outputVariableDetails;
  }
}

export class DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference {
    return new DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFleetAppsManagementRunbookAssociationsTasksStepProperties {
}

export function dataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesToTerraform(struct?: DataOciFleetAppsManagementRunbookAssociationsTasksStepProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciFleetAppsManagementRunbookAssociationsTasksStepProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetAppsManagementRunbookAssociationsTasksStepProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action_on_failure - computed: true, optional: false, required: false
  public get actionOnFailure() {
    return this.getStringAttribute('action_on_failure');
  }

  // condition - computed: true, optional: false, required: false
  public get condition() {
    return this.getStringAttribute('condition');
  }

  // run_on - computed: true, optional: false, required: false
  public get runOn() {
    return this.getStringAttribute('run_on');
  }
}

export class DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference {
    return new DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContent {
}

export function dataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentToTerraform(struct?: DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // checksum - computed: true, optional: false, required: false
  public get checksum() {
    return this.getStringAttribute('checksum');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // object - computed: true, optional: false, required: false
  public get object() {
    return this.getStringAttribute('object');
  }

  // source_type - computed: true, optional: false, required: false
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }
}

export class DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference {
    return new DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariables {
}

export function dataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesToTerraform(struct?: DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariables | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariables | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference {
    return new DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariables {
}

export function dataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesToTerraform(struct?: DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariables | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariables | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // input_variables - computed: true, optional: false, required: false
  private _inputVariables = new DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList(this, "input_variables", false);
  public get inputVariables() {
    return this._inputVariables;
  }

  // output_variables - computed: true, optional: false, required: false
  public get outputVariables() {
    return this.getListAttribute('output_variables');
  }
}

export class DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference {
    return new DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetails {
}

export function dataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsToTerraform(struct?: DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // command - computed: true, optional: false, required: false
  public get command() {
    return this.getStringAttribute('command');
  }

  // content - computed: true, optional: false, required: false
  private _content = new DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentList(this, "content", false);
  public get content() {
    return this._content;
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // execution_type - computed: true, optional: false, required: false
  public get executionType() {
    return this.getStringAttribute('execution_type');
  }

  // variables - computed: true, optional: false, required: false
  private _variables = new DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList(this, "variables", false);
  public get variables() {
    return this._variables;
  }
}

export class DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference {
    return new DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsProperties {
}

export function dataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesToTerraform(struct?: DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // num_retries - computed: true, optional: false, required: false
  public get numRetries() {
    return this.getNumberAttribute('num_retries');
  }

  // timeout_in_seconds - computed: true, optional: false, required: false
  public get timeoutInSeconds() {
    return this.getNumberAttribute('timeout_in_seconds');
  }
}

export class DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference {
    return new DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetails {
}

export function dataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsToTerraform(struct?: DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // execution_details - computed: true, optional: false, required: false
  private _executionDetails = new DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsList(this, "execution_details", false);
  public get executionDetails() {
    return this._executionDetails;
  }

  // is_copy_to_library_enabled - computed: true, optional: false, required: false
  public get isCopyToLibraryEnabled() {
    return this.getBooleanAttribute('is_copy_to_library_enabled');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // os_type - computed: true, optional: false, required: false
  public get osType() {
    return this.getStringAttribute('os_type');
  }

  // platform - computed: true, optional: false, required: false
  public get platform() {
    return this.getStringAttribute('platform');
  }

  // properties - computed: true, optional: false, required: false
  private _properties = new DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesList(this, "properties", false);
  public get properties() {
    return this._properties;
  }

  // scope - computed: true, optional: false, required: false
  public get scope() {
    return this.getStringAttribute('scope');
  }

  // task_record_id - computed: true, optional: false, required: false
  public get taskRecordId() {
    return this.getStringAttribute('task_record_id');
  }
}

export class DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference {
    return new DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFleetAppsManagementRunbookAssociationsTasks {
}

export function dataOciFleetAppsManagementRunbookAssociationsTasksToTerraform(struct?: DataOciFleetAppsManagementRunbookAssociationsTasks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciFleetAppsManagementRunbookAssociationsTasks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetAppsManagementRunbookAssociationsTasks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // association_type - computed: true, optional: false, required: false
  public get associationType() {
    return this.getStringAttribute('association_type');
  }

  // output_variable_mappings - computed: true, optional: false, required: false
  private _outputVariableMappings = new DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsList(this, "output_variable_mappings", false);
  public get outputVariableMappings() {
    return this._outputVariableMappings;
  }

  // step_name - computed: true, optional: false, required: false
  public get stepName() {
    return this.getStringAttribute('step_name');
  }

  // step_properties - computed: true, optional: false, required: false
  private _stepProperties = new DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesList(this, "step_properties", false);
  public get stepProperties() {
    return this._stepProperties;
  }

  // task_record_details - computed: true, optional: false, required: false
  private _taskRecordDetails = new DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsList(this, "task_record_details", false);
  public get taskRecordDetails() {
    return this._taskRecordDetails;
  }
}

export class DataOciFleetAppsManagementRunbookAssociationsTasksList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference {
    return new DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFleetAppsManagementRunbookAssociations {
}

export function dataOciFleetAppsManagementRunbookAssociationsToTerraform(struct?: DataOciFleetAppsManagementRunbookAssociations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataOciFleetAppsManagementRunbookAssociationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciFleetAppsManagementRunbookAssociations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetAppsManagementRunbookAssociations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // execution_workflow_details - computed: true, optional: false, required: false
  private _executionWorkflowDetails = new DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsList(this, "execution_workflow_details", false);
  public get executionWorkflowDetails() {
    return this._executionWorkflowDetails;
  }

  // groups - computed: true, optional: false, required: false
  private _groups = new DataOciFleetAppsManagementRunbookAssociationsGroupsList(this, "groups", false);
  public get groups() {
    return this._groups;
  }

  // tasks - computed: true, optional: false, required: false
  private _tasks = new DataOciFleetAppsManagementRunbookAssociationsTasksList(this, "tasks", false);
  public get tasks() {
    return this._tasks;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataOciFleetAppsManagementRunbookAssociationsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataOciFleetAppsManagementRunbookAssociationsOutputReference {
    return new DataOciFleetAppsManagementRunbookAssociationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_runbook oci_fleet_apps_management_runbook}
*/
export class DataOciFleetAppsManagementRunbook extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_fleet_apps_management_runbook";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_runbook oci_fleet_apps_management_runbook} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciFleetAppsManagementRunbookConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciFleetAppsManagementRunbookConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_fleet_apps_management_runbook',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '6.18.0',
        providerVersionConstraint: '~> 6.18.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._runbookId = config.runbookId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // associations - computed: true, optional: false, required: false
  private _associations = new DataOciFleetAppsManagementRunbookAssociationsList(this, "associations", false);
  public get associations() {
    return this._associations;
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // estimated_time - computed: true, optional: false, required: false
  public get estimatedTime() {
    return this.getStringAttribute('estimated_time');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // is_default - computed: true, optional: false, required: false
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // operation - computed: true, optional: false, required: false
  public get operation() {
    return this.getStringAttribute('operation');
  }

  // os_type - computed: true, optional: false, required: false
  public get osType() {
    return this.getStringAttribute('os_type');
  }

  // platform - computed: true, optional: false, required: false
  public get platform() {
    return this.getStringAttribute('platform');
  }

  // resource_region - computed: true, optional: false, required: false
  public get resourceRegion() {
    return this.getStringAttribute('resource_region');
  }

  // runbook_id - computed: false, optional: false, required: true
  private _runbookId?: string; 
  public get runbookId() {
    return this.getStringAttribute('runbook_id');
  }
  public set runbookId(value: string) {
    this._runbookId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get runbookIdInput() {
    return this._runbookId;
  }

  // runbook_relevance - computed: true, optional: false, required: false
  public get runbookRelevance() {
    return this.getStringAttribute('runbook_relevance');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      runbook_id: cdktf.stringToTerraform(this._runbookId),
    };
  }
}
